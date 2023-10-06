import { Grid, GridItem } from "@chakra-ui/react";
 import SmallWithLogoLeft from "../rodape";
 import Topo from "../topo";

 interface Props {
children: React.ReactNode
 }
export default function Layout (props: Props) {
const { children } = props
return (
 <>
<Grid className="grid" templateColumns='1fr' templateRows='64px auto 64px' gap={3}>
<GridItem colSpan={1} rowSpan={1}>
<Topo />
</GridItem>
<GridItem colSpan={1} rowSpan={1}>
     {children}
</GridItem>
<GridItem colSpan={1} rowSpan={1}>
< SmallWithLogoLeft/>
</GridItem>
</Grid>
</>
)
}