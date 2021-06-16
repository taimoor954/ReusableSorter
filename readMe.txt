Install concurrent
Install nodemon 
Send all your js code in build folder
Send all your ts code in src folder
create a tsconfig file writing tsc init --y in terminal
in tsconfig file search for ourDir and rootDir
outDir may build directory ka path den  like "./build"
rootDir may src ka path like "./src"
install nodemon and concurrently
create a package.json file npm init --y
in script object add 3 scripts
         "start:build" : "tsc -w",
         "start:run": "nodemon build/index.js",
         "start": "concurrently npm:start:*"