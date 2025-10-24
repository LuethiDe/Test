export const Header = ({ gift, setGift, meme, setMeme }) => {
  return (
    <header>
      <div id="img"></div>
      <div id="main">PEDRO</div>
      <div
        style={{
          flexGrow: "2",
        }}
      ></div>
      <button
        onClick={() => setMeme(!meme)}
        class="button button1"
        style={{
          width: "140px",
          height: "25px",
        }}
      >
        be surprised 🍮
      </button>
      <button
        onClick={() => setGift(!gift)}
        class="button button1"
        style={{
          width: "25px",
          height: "25px",
          marginRight: "15px",
        }}
      >
        🦝
      </button>
    </header>
  );
};
