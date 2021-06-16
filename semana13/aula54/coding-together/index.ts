//Typescript

let musics = getAllMusics();

function updateMusic(
  name: string,
  link: string,
  artists: Artist[],
  category: string
) {
  musics = musics.filter((music) => {
    music.name === name;
  });

  if (musics.length === 0) {
    createMusic(name, link, new Date(), artists, category);
  } else {
    musics[0].setLink(link).setArtists(artists).setCategory(category);
  }
}

// Código escrito da imagem do exemplo 2
//Typescript

import { database } from "database";
let user = new User("Astrodev", "astrodev@gmail.com");

function createUser(user: User) {
  if (findUser(user)) {
    throw new Error("user already exists");
  }

  if (user.email === "") {
    throw new Error("user email must not be empty");
  }

  if (user.name === "") {
    throw new Error("user name must not be empty");
  }

  database.create(user);
}

function findUser(user: User): User | undefined {
  return database.find(user);
}

createCustomer(user);
