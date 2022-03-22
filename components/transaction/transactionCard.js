import Image from "next/image";
import DollarNaira from "../../assets/dollarnaira.svg";

const TransactionCard = (width, height, radius, amount, image) => {
  return (
    <div>
      <div className="">
        <div>
          <Image
            src={require(`../../assets/${image}`)}
            alt="logo"
            width={84}
            height={42}
          />
          <p
            className="font-body"
            sx={{ fontWeight: "400", color: "#044566", fontSize: "26px" }}
            align="center"
          >
            {amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
