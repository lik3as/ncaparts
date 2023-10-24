import { FC } from "react";

import Button from "../../../helpers/ItemButton";
import { Image } from "../styles";
import sales from "../../../../public/images/sales.png";
import market from "../../../../public/images/market.png";
import truck from "../../../../public/images/truck.png";
import blog from "../../../../public/images/book.png";

const Menu: FC = () => {
  const images = [sales.src, market.src, truck.src, blog.src];
  return (
    <>
      {["Melhores Ofertas", "Seja um Revendedor", "Acompanhar Pedido", "Blog"].map((innerText, i) => {
        return (
          <Button variant="secondary" href="https://ncatech.com.br/" className="text-nowrap mx-1 my-2" key={i}>
            <Image src={images[i]} width={"25px"}/>
            {innerText}
          </Button>
        )
      })
      }
    </>
  )
}

export default Menu;