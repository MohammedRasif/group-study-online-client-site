const GiveMarks = () => {
  return (
    <div className="pt-28 text-center mb-24">
      <h1 className="text-5xl text-blue-500">Assignment Mark</h1>
      <div className="mt-7">
        <h1 className="text-left ml-96 pl-56 font-bold">Mark</h1>
        <input
          type="text" name="marks"
          placeholder="Give Assignment Mark"
          className="input input-bordered w-full max-w-xs "
        />
      </div>
      <div className="mt-5 mb-10">
        <h1 className="text-left ml-96 pl-56 font-bold">Feetback</h1>
        <textarea
          placeholder="Bio"
          className="textarea textarea-bordered textarea-md w-full max-w-xs"
        ></textarea>
      </div>
      <button className="btn glass bg-blue-500 text-white">Submited Now</button>
    </div>
  );
};

export default GiveMarks;
