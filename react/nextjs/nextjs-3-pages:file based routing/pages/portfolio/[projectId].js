import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.query.projectId);
  return (
    <div>
      <h1>The Portfolio Project Page :{router.query.projectId}</h1>
    </div>
  );
}
export default PortfolioProjectPage;
