import { Link, useNavigate } from "react-router-dom";

type ButtonType = "button" | "submit" | "reset";

interface TwoButtonProps {
  textButton1: string;
  textButton2: string;
  route?: string;
  typeButton?: ButtonType;
  onTapFunc?: () => void;
}

const TwoButton = ({
  textButton1,
  textButton2,
  route,
  typeButton,
  onTapFunc,
}: TwoButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row my-8 w-full gap-4  items-center">
      <button
        onClick={() => navigate(-1)}
        className="w-full md:w-[50%] h-[46px] bg-transparent  text-ms text-orange font-semibold py-2 px-4 border border-border-grey rounded-lg"
      >
        {textButton1}
      </button>
      <Link to={route ?? "#"} className=" w-full md:w-[50%] h-[46px]">
        <button
          type={typeButton}
          className=" bg-orange  text-white  rounded-lg block text-ms font-semibold w-full h-full  "
        >
          {textButton2}
        </button>
      </Link>
    </div>
  );
};
export default TwoButton;
