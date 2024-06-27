import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "666883570018a2172fde",
        ID.unique(),
        file
    );

    return fileUploaded;
};

export default uploadImage;