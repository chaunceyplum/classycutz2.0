export async function loadUser(user: any) {
  // Call an external API endpoint to get posts
  user
    ? () => {
        const res = user
        const data = res.json()

        return data
      }
    : () => {
        const initialData = {
          isLoggedIn: false,
        }
        return initialData
      }
}
