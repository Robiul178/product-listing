

const Card = ({ p }) => {
    const { title, image, price, description, date } = p;
    return (
        <div>
            <div className="max-w-64 max-h-[600px] flex flex-col p-4 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div>
                    <img src={image} alt="dfgg" className="object-cover object-center  rounded-md w-full h-64 dark:bg-gray-500" />

                    <div className="mt-6 mb-2 ">
                        <h2 className="text-xl  font-semibold tracking-wide ">{title}</h2>
                        <h2 className="text-lg ">Price:{price}</h2>
                        <h2 className="text-lg ">Publish Date:{date}</h2>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;