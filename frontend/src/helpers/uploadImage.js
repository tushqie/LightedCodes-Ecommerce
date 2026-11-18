const url = "https://api.cloudinary.com/v1_1/" + process.env.REACT_APP_CLOUD_NAME_CLOUDINARY + "/image/upload"

const uploadImage = async (image) => {
if (!image) {
throw new Error("No image selected")
}

const formData = new FormData()
formData.append("file", image)
formData.append("upload_preset", "mern_product")

const dataResponse = await fetch(url, {
    method: "POST",
    body: formData
})

const responseData = await dataResponse.json()

if (!dataResponse.ok || !responseData.secure_url) {
    throw new Error(responseData?.error?.message || "Image upload failed")
}

return responseData

}

export default uploadImage