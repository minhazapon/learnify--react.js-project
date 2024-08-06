

const LiDEtails = ({li}) => {

    const {image, name, details} = li



    return (
        <div>

                <div className="card card-compact bg-[#030637] text-[#40F8FF] border-[1px] border-[#40F8FF] w-96 shadow-xl">
                  <figure>
                    <img className=" h-[250px] w-[400px]"
                      src={image}
                      alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Name: {name} </h2>
                    <p> {details} </p>
                  </div>
                </div>
            
        </div>
    );
};

export default LiDEtails;