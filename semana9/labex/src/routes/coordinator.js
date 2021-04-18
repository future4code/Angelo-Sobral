export const goToListTripPage = (history) => {
    history.push("/trips/list")
}

export const goToAdminHomePage = (history) => {
    history.push("/admin/trips/list")
}

export const goToLoginPage = (history, token) => {
    token 
    ? 
    history.push("/admin/trips/list")
    :
    history.push("/login")
}

export const goToApplyFormPage = (history) => {
    history.push("/trips/application")
}

export const goToCreteTripPage = (history) => {
    history.push("/admin/trips/create")
}

export const goToHomePage = (history) => {
    history.push("/")
}

export const goToTripDetailsPage = (history, id) => {
    history.push(`/admin/trips/${id}`)
}

