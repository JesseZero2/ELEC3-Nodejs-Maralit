
/*
Full Name: Jessie B. Maralit
Section: IV-BSIT A
Activity: N3 - File Manager with fs and path
Date: November 27, 2026
*/

const fs = require("fs");
const path = require("path");

// Location where text files will be saved
const filesFolder = path.join(__dirname, "files");

// Create the folder if it does not exist
fs.mkdirSync(filesFolder, { recursive: true });

function main() {
    const command = process.argv[2];
    const fileName = process.argv[3];
    const content = process.argv.slice(4).join(" ");

    console.log("\n=== FILE MANAGER ===");
    console.log("Prepared by: Jessie B. Maralit");

    try {
        // List all files and their information
        if (command === "list") {
            const files = fs.readdirSync(filesFolder);

            if (files.length === 0) {
                console.log("No files found.");
                return;
            }

            for (const name of files) {
                const filePath = path.join(filesFolder, name);

                if (fs.statSync(filePath).isFile()) {
                    console.log("\nFull Path:", filePath);
                    console.log("File Name:", path.basename(filePath));
                    console.log("Extension:", path.extname(filePath));
                    console.log("Contents:", fs.readFileSync(filePath, "utf8"));
                    console.log("-----------------------------");
                }
            }

            return;
        }

        const validCommands = [
            "create",
            "read",
            "update",
            "delete"
        ];

        if (!validCommands.includes(command)) {
            console.log("Invalid command.");
            console.log("Use: create, read, update, delete, list");
            return;
        }

        // Accept simple .txt filenames only
        if (!fileName || !/^[a-zA-Z0-9_-]+\.txt$/.test(fileName)) {
            console.log("Please enter a valid .txt filename.");
            return;
        }

        const filePath = path.join(filesFolder, fileName);

        // Create a text file
        if (command === "create") {
            if (content.trim() === "") {
                console.log("Please enter file content.");
                return;
            }

            if (fs.existsSync(filePath)) {
                console.log("File already exists.");
                return;
            }

            fs.writeFileSync(filePath, content, "utf8");
            console.log("File created successfully:", fileName);
            return;
        }

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            console.log("File not found:", fileName);
            return;
        }

        // Read a file
        if (command === "read") {
            const data = fs.readFileSync(filePath, "utf8");
            console.log("File Content:", data);
            return;
        }

        // Append text to an existing file
        if (command === "update") {
            if (content.trim() === "") {
                console.log("Please enter text to append.");
                return;
            }

            fs.appendFileSync(filePath, "\n" + content, "utf8");
            console.log("File updated successfully:", fileName);
            return;
        }

        // Delete an existing file
        if (command === "delete") {
            fs.unlinkSync(filePath);
            console.log("File deleted successfully:", fileName);
            return;
        }

    } catch (error) {
        console.log("Error:", error.message);
    }
}

main();