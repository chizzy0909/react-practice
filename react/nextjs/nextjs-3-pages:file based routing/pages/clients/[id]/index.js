import { useRouter } from "next/router";

function ClientProjectPage() {
  const router = useRouter();

  function loadProjectHandler() {
    // load data
    // router.push("/clients/max/projectA");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "projectA" },
    });
  }
  const id = router.query.id;
  return (
    <div>
      <h1>The Project of a Given Client : {id}</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
export default ClientProjectPage;
