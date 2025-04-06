function SuccessMessage({SetStatus , Status}) {


  function successButton () {
    window.location.reload();
    SetStatus(!Status)
  }
  return (
    <div class="Success__Message">
      <h2>Success</h2>
      <p>Message has been sent</p>
      <button onClick={successButton}>Ok</button>
      {Status}
    </div>
  );
}

export default SuccessMessage;
