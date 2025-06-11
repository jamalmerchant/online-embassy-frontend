import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const description = form.description.value;
    const image = form.image.files[0];

    if (!image) {
      return toast.error("image is requred!");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", image);

    fetch("http://localhost:3000/add-service", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("service added successfully done!");
          form.reset();
        }
      });

    // console.log(name, description, image);
  };
  return (
    <div>
      <h1 className="text-2xl">Add Services</h1>
      <div className="modal-box">
        <form onSubmit={handleAddService}>
          <input
            type="text"
            name="name"
            placeholder="Service name here"
            className="input input-bordered w-full mt-3"
          />

          <input
            accept="images/*"
            type="file"
            name="image"
            placeholder="Add your File here"
            className="input input-bordered w-full mt-3"
          />

          <textarea
            type="text"
            placeholder=" addService name here"
            name="description"
            className="input input-bordered w-full h-28 mt-4"
          />
          <input
            className="btn btn-primary text-white w-full mt-4"
            type="Submit"
            value="Add Service"
          />
        </form>
      </div>
    </div>
  );
};

export default AddService;
