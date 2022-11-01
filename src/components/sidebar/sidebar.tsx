import {
  Avatar,
  Drawer,
  useTheme,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
} from "@mui/material"
import { Box } from "@mui/system"
import InboxIcon from "@mui/icons-material/Inbox"
import { useDrawerContext } from "../../Provider/sideBarContext"
import { TodoContext, TodoContextType } from "../../Provider/Provider"
import { useContext } from "react"

export const MenuLateral = ({ children }: any) => {
  const theme = useTheme()
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()

  const { updateItem, carrinho } = useContext(TodoContext) as TodoContextType

  return (
    <>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        variant="temporary"
        onClose={toggleDrawerOpen}
      >
        <Box
          sx={{ backgroundColor: "#13111B" }}
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Divider />
          <Box flex={1}>
            {carrinho.map((item) => {
              return <h1>{item.nome}</h1>
            })}
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={0}>
        {children}
      </Box>
    </>
  )
}
