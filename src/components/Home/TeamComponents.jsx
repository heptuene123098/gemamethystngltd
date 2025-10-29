import TeamMembers from "./TeamMembers";
import Header from "./compheader";
function TeamComponents() {
  return (
    <section className=" flex flex-col gap-[4rem] py-[4rem] mt-8  ">
      <Header
        text={" meet the team"}
        title={
          <>
            Professional <br /> Creative Team Members
          </>
        }
        btnText={"view all members"}
      />

      <TeamMembers />
    </section>
  );
}

export default TeamComponents;
