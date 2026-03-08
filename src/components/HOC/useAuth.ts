export default function useAuth() {
  const user = { name: "Mikasa", age: 19 };
  const isLoading = true;
  const isAuthenticated = true;
  const isAdmin = false;

  return { user, isLoading, isAuthenticated, isAdmin };
}
