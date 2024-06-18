# Display Customer Orders D3.js
 Web applications that utilizes d3.js for an interactive display to detail customer purchase order data. This will display customer names, order IDs and purchase amounts..

How to set up localhost:port .
1. Live Preview by Microsoft as an extension in Visual Studio Code. It points to port 3000 by default but in extension settings can be changed to 8000 but doesn't really matter. Next you right click on index.html in VS code and click on 'Show Preview'. This will open the port and can be accessed from your browser with localhost:3000 or localhost:8000 (whichever its set to).

2. Using python which should already be installed on your system. Open new terminal in VS code (make sure the terminal is pointing to your project directory, this should be by default if you already have your project open in VS code when opening terminal). Type python --version. If it is above 3 like 3.11.9 for example, you can proceed. Next type python -m http.server 8000 . This will open the port on localhost:8000 and can be opened in your browser. To close the open port, press ctrl+c or cmd+c in the terminal. It will return keyboard interrupt received, exiting

3. Another method is with node.js . Open your command prompt on your system (typically cmd in your search bar) it should not be pointing to project folder yet. Type install http-server -g . (it will now download a script that we will run to open the port.) Next part, you will want to open the folder of your project, on windows you want to do this with file explorer, and you will see the file address similar to this C:\Users\name\Documents\GitHub\Display-Customer-Orders-d3.js . Click on this address and replace the entire field by typing cmd and hit enter. It will open the command prompt pointing to the project folder. Then type http-server. You can open this in your browser with localhost:8080. You can close this port by pressing ctrl+c or cmd+c in the command prompt.