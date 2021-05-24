import express, { json, Request, Response } from "express";
import cors from "cors";
import { convertDate, nowDate, verifyAge } from "./utils";

type user = {
  id: number;
  name: string;
  cpf: string;
  birthdayDate: string;
  balance: number;
  statement: changeAccount[];
};

type changeAccount = {
  value: number;
  date: string;
  description: string;
};

const users: user[] = [
  {
    id: 1,
    name: "Angelo ODwyer",
    cpf: "12312312344",
    birthdayDate: "01/08/1996",
    balance: 477,
    statement: [
      {
        value: 477,
        date: "19/05/2021",
        description: "Depósito em dinheiro",
      },
      {
        value: 77,
        date: "19/05/2021",
        description: "Conta do celular",
      },
    ],
  },
  {
    id: 2,
    name: "Karine ODwyer",
    cpf: "12312312355",
    birthdayDate: "09/02/1994",
    balance: 986,
    statement: [
      {
        value: 986,
        date: "18/05/2021",
        description: "Depósito em dinheiro",
      },
    ],
  },
];

let errorCode = 422;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/labebank/users", (req: Request, res: Response) => {
  res.status(200).send(users);
});

app.get("/labebank/:cpf/balance", (req: Request, res: Response) => {
  try {
    const reqCpf = req.params.cpf as string;

    if (!reqCpf) {
      errorCode = 400;
      throw new Error("CPF não informado ou incorreto");
    }

    let balance;

    users.map((user) => {
      if (user.cpf === reqCpf) {
        balance = user.balance;
      }
    });

    res.status(200).send({ balance });
  } catch (err) {
    res.status(errorCode).send({ message: err.message });
  }
});

app.put("/labebank/deposit", (req: Request, res: Response) => {
  try {
    const reqName = req.body.name;
    const reqCpf = req.body.cpf;
    const reqValue = Number(req.body.value);

    if (!reqCpf || !reqName || !reqValue) {
      errorCode = 400;
      throw new Error("Dados não informados");
    }

    for (let user of users) {
      if (
        user.cpf === reqCpf &&
        user.name.toLowerCase() === reqName.toLowerCase()
      ) {
        user.balance += reqValue;
        user.statement.push({
          date: new Date().toLocaleDateString(),
          value: reqValue,
          description: "Depósito em dinheiro",
        });
        res.status(200).send({ message: "Transação realizada com sucesso!" });
      } else {
        errorCode = 400;
        throw new Error("Dados incorretos");
      }
    }
  } catch (err) {
    res.status(errorCode).send({ message: err.message });
  }
});

app.put("/labebank/updatePayment", (req: Request, res: Response) => {
  try {
    for (let user of users) {
      user.statement.map((userM) => {
        if (
          Date.parse(convertDate(userM.date)) <
            Date.parse(convertDate(nowDate)) &&
          userM.description !== "Depósito em dinheiro"
        ) {
          user.balance -= userM.value;
          res.status(200).send({ message: "Sucesso!" });
        }
      });
    }
  } catch (err) {
    res.status(errorCode).send({ message: err.message });
  }
});

app.post("/labebank/createAccount", (req: Request, res: Response) => {
  try {
    const { name, cpf, birthdayDate } = req.body;

    const newUser: user = {
      id: Date.now(),
      name,
      cpf,
      birthdayDate,
      balance: 0,
      statement: [],
    };

    if (!name || !cpf || cpf.length !== 11 || !birthdayDate) {
      errorCode = 400;
      if (cpf.length !== 11) {
        throw new Error("CPF deve conter 11 números");
      }
      throw new Error(
        "Necessário preencher body com nome, CPF e data de nascimento"
      );
    }

    for (let user of users) {
      if (user.cpf === cpf) {
        throw new Error("CPF já cadastro na base de dados");
      }
    }

    if (verifyAge(birthdayDate) >= 18) {
      users.push(newUser);

      res.status(201).send({ message: "Usuário cadastrado com sucesso!" });
    } else {
      throw new Error("Cliente não possue idade igual ou superior a 18 anos");
    }
  } catch (err) {
    res.status(errorCode).send({ message: err.message });
  }
});

app.post("/labebank/payment", (req: Request, res: Response) => {
  try {
    const { date, description, value, cpf } = req.body;

    if (!description || !value || !cpf) {
      errorCode = 400;
      throw new Error("Dados incorretos ou não informados");
    }

    function verifyDate() {
      if (Date.parse(convertDate(date)) < Date.parse(convertDate(nowDate))) {
        throw new Error("A data não pode ser anterior a hoje");
      }
      return date;
    }

    for (let user of users) {
      if (user.balance < value) {
        errorCode = 422;
        throw new Error("Saldo insuficiente para realizar a transação");
      }
      if (user.cpf === cpf) {
        user.statement.push({
          date: date ? verifyDate() : nowDate,
          description,
          value,
        });
        res.status(201).send({ message: "Sucesso!" });
      } else {
        errorCode = 400;
        throw new Error("CPF não encontrado ou incorreto");
      }
    }
  } catch (err) {
    res.status(errorCode).send({ message: err.message });
  }
});

app.post("/labebank/transfer", (req: Request, res: Response) => {
  try {
    const nameWillDebit = req.query.name?.toString().toLowerCase() as string;
    const cpfWillDebit = req.query.cpf as string;
    const { nameWillCredit, cpfWillCredit, valueWillCredit } = req.body;

    if (
      !nameWillCredit ||
      !nameWillDebit ||
      !cpfWillCredit ||
      !cpfWillDebit ||
      !valueWillCredit
    ) {
      errorCode = 400;
      throw new Error("Dados não encontrado");
    }

    const hasUserDebit = users.find(
      (user) => user.cpf === cpfWillDebit && user.name.toLowerCase() === nameWillDebit
    );
    const hasUserCredit = users.find(
      (user) => user.cpf === cpfWillCredit && user.name.toLowerCase() === nameWillCredit.toLowerCase()
    );

    if (!hasUserDebit) {
      errorCode = 404;
      throw new Error("Dados remetente não encontrado");
    }

    if (!hasUserCredit) {
      errorCode = 404;
      throw new Error("Dados destinatário não encontrado");
    }

    if (hasUserDebit.balance < valueWillCredit) {
      throw new Error("Saldo insuficiente para realizar transação");
    }

    for (let user of users) {
      if (user.cpf === cpfWillDebit) {
        user.balance -= valueWillCredit;
        user.statement.push({
          date: nowDate,
          description: "Transferência On-Line",
          value: valueWillCredit,
        });
      }

      if (user.cpf === cpfWillCredit) {
        user.balance += valueWillCredit;
        user.statement.push({
          date: nowDate,
          description: "Transferência On-Line",
          value: valueWillCredit,
        });
      }
    }

    res.status(200).send({ message: "Tranferência realizado com sucesso!" });
  } catch (err) {
    res.status(errorCode).send({ message: err.message });
  }
});

app.listen(3003, () => {
  console.log("Servidor iniciado em http://localhost:3003");
});
