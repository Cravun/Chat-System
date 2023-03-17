import { Outlet } from "react-router-dom";
import { FullScreenCard } from "../../components/FullScreenCard";
export const Authenticator = () => {
  return (
    <FullScreenCard>
      <FullScreenCard.Body>
        <Outlet />
      </FullScreenCard.Body>
      <FullScreenCard.BelowCard>Test</FullScreenCard.BelowCard>
    </FullScreenCard>
  );
};

export default Authenticator;
