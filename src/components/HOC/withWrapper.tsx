import useAuth from "./useAuth";

export default function withWrapper<T>(Component: React.ComponentType<T>) {
  return function WrappedComponent(props: T) {
    const { user, isLoading } = useAuth();
    if (isLoading) return <p>Loading..</p>;
    if (!user) return <p>Access denied</p>;

    return <Component {...props} user={user} />;
  };
}
