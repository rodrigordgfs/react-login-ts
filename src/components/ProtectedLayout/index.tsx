import { useAuth } from "../../context/AuthProvider/useAuth";

export default function ProtectedLayout({
  children,
}: {
  children: JSX.Element;
}) {
  const auth = useAuth();

  if (!auth.email) {
    return <div>Not authorized</div>;
  }

  return children;
}
