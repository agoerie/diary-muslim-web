import "./styles.css";

const deleteAccountPage = () => {
  return (
    <div class="about-section">
      <h4 style={{ fontSize: 20 }}>To Delete your Diary Muslim Account</h4>
      <p class="line-space">
        By following this process, your account and data will be permanently
        deleted, and our team will not be able to recover the account.
      </p>
      <p>From Diary Muslim mobile app</p>
      <span>
        1. Open your settings by tapping the “gear” icon in the upper right-hand
        corner of User tab.
      </span>
      <p></p>
      <span>2. On Setting Page, select Request Delete Account.</span>
      <p></p>
      <span>
        3. You will then be prompted to choose option to Continue or No for
        Account Deletion
        <div style={{ marginLeft: 20, marginTop: 8 }}>
          a.<span class="spaced-text">&nbsp;</span>if Tap Continue, you will
          receive confirmation code email where you can complete the deletion
          process.
        </div>
        <div style={{ marginLeft: 20 }}>
          b.<span class="spaced-text">&nbsp;</span>If No, will cancel request.
        </div>
      </span>
    </div>
  );
};

export default deleteAccountPage;
