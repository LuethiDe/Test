export const MainArea = ({ gift, meme }) => {
  return (
    <main>
      {gift && (
        <div
          class="h1"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
        >
          <div
            id="img2"
            style={{
              borderRadius: "24px",
              border: "4px solid #D6CCC2",
            }}
          ></div>
          <p>If you thought your code was bulletproof</p>
        </div>
      )}
      {meme && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <iframe
            style={{
              borderRadius: "24px",
              border: "4px solid #D6CCC2",
            }}
            width="315"
            height="560"
            src="https://www.youtube.com/embed/jw3jjN8kCyo?autoplay=1&mute=0&loop=1&playlist=jw3jjN8kCyo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //allowFullScreen
          ></iframe>
        </div>
      )}
    </main>
  );
};
