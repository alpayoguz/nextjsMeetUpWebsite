import NewMeetupForm from "../../components/meetups/NewMeetupForm";
export default function NewMeetUp() {
  function onAddMeetup(data) {
    console.log(data);
  }

  return (
    <>
        <NewMeetupForm onAddMeetup={onAddMeetup} />
    </>
  );
}
