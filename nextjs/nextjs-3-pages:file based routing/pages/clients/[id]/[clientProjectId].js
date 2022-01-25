import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();
  const id = router.query.id;
  const clientProjectId = router.query.clientProjectId;

  return (
    <div>
      <h1>
        The Project Page for a Specific Project for a Given Client : {id} -{" "}
        {clientProjectId}
      </h1>
    </div>
  );
}
export default SelectedClientProjectPage;
