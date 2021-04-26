export const goToListTripPage = (history) => {
    history.push("/trips/list")
}

export const goToAdminHomePage = (history) => {
    history.push("/admin/trips/list")
}

export const goToLoginPage = (history) => {
    history.push("/login")
}

export const goToApplyFormPage = (history) => {
    history.push("/trips/application")
}

export const goToCreteTripPage = (history) => {
    history.push("/admin/trips/create")
}

export const goToTripDetailsPage = (history) => {
    history.push("/admin/trips/:id")
}

