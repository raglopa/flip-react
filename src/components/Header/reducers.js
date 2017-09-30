const INITIAL_STATE = {
  navLinks: [
    {
      url: 'https://github.com/raglopa/flip-react',
      icon: 'fa-github'
    },
    {
      url: 'https://www.linkedin.com/in/attilapolgar/',
      icon: 'fa-linkedin-square'
    }

  ]
}
const header = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default {
  header
}
