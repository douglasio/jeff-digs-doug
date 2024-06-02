export function getTemplate({
	redirectPath,
	withError,
}: {
	redirectPath: string;
	withError: boolean;
}): string {
	return `
  <!doctype html>
  <html lang="en" data-theme="dark">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Doug & Jeff's Wedding</title>
      <meta name="description" content="This is our website, but you can't get in without the secret code.">
      <link rel="shortcut icon" href="./favicon.ico">

      <style>
	  @import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

	  * {
		  font-family: 'Press Start 2P', cursive;
	  }
	  
	  html,
	  body {
		  width: 100%;
		  height: 100%;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  background: black;
		  flex-direction: column;
		  color: #54fe55;
	  }
	  
	  *::selection {
		  background: #1a4f1a;
	  }
	  
	  .welcome .line {
		  overflow: hidden;
		  width: 0px;
		  text-shadow: 0px 0px 10px #54fe55;
		  height: 1rem;
		  text-align: left;
	  }
	  
	  .welcome .line1 {
		  animation: type 0.5s 1s steps(20, end) forwards;
	  }
	  .welcome .line2 {
		  animation: type 0.5s 1.5s steps(20, end) forwards;
	  }
	  .welcome .line3 {
		  animation: type 0.5s 2s steps(20, end) forwards;
	  }
	  @keyframes type {
		  to {
			  width: 280px;
		  }
	  }
	  
	  form {
		  display: flex;
		  flex-direction: column;
		  max-width: 300px;
	  }
	  
	  form label {
		  margin-bottom: 1rem;
		  display: flex;
		  flex-direction: column;
		  text-shadow: 0px 0px 10px #54fe55;
	  }
	  
	  form input {
		  background: black;
		  border: 1px solid #54fe55;
		  margin-top: 0.5rem;
		  padding: 0.5rem;
		  color: #54fe55;
		  text-shadow: 0px 0px 10px #54fe55;
		  box-shadow: 0px 0px 5px #54fe55;
	  }
	  
	  form input:focus {
		  outline: none;
	  }
	  
	  form button {
		  padding: 0.5rem;
		  background: #1a4f1a;
		  color: #54fe55;
		  border: 0;
		  text-shadow: 0px 0px 10px #54fe55;
		  box-shadow: 0px 0px 10px #1a4f1a;
		  cursor: pointer;
	  }
	  
	  form button:focus {
		  outline: none;
	  }
	  
	  @keyframes blink {
		  0% {
			  opacity: 0;
		  }
		  49% {
			  opacity: 0;
		  }
		  50% {
			  opacity: 1;
		  }
		  100% {
			  opacity: 1;
		  }
	  }
	  
	  .blink {
		  animation-name: blink;
		  animation-duration: 1s;
		  animation-iteration-count: infinite;
	  }
	  
	  .error {
		  animation-name: horizontal-shaking;
		  animation-duration: 200ms;
		  animation-iteration-count: 2;
		  animation-timing-function: linear;
		  animation-direction: forwards;
	  }
	  
	  @keyframes horizontal-shaking {
		  0% { transform: translateX(0) }
		  25% { transform: translateX(5px) }
		  50% { transform: translateX(-5px) }
		  75% { transform: translateX(5px) }
		  100% { transform: translateX(0) }
		 }
	  
      </style>
    </head>

    <body>
      <main>
			<p class="welcome">
				<div class="line line1">WELCOME TO DOUG AND JEFF&rsquo;S WEDDING WEBSITE</div>
				<div class="line line2">please enter your </div>
				<div class="line line3">credentials.<span class="blink">_</span></div>
			</p>
          
          <form method="post" action="/cfp_login">
		  	<label for="pw">Password:</label>
            <input type="hidden" name="redirect" value="${redirectPath}" />
            <input id="pw" type="password" name="password" aria-label="Password" autocomplete="current-password" required autofocus>
            <button type="submit">[ enter ]</button>
          </form>
		  ${withError ? `<p class="welcome error">incorrect password, please try again</p>` : ""}
      </main>
    </body>

  </html>
  `;
}
