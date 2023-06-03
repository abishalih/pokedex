import Card from "../../components/card";
import Menu, { MenuProps } from "./Menu";

type Props = {
    menu?: Array<MenuProps>;
}

const Header = ({ menu=[] }: Props) => {
  return (
    <Card>
        {menu.map((menuProps, key)=>(<Menu {...menuProps} key={key} />))}
    </Card>
  )
}

export default Header