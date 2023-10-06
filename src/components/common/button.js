import { Button } from "@material-ui/core";
import { Box } from "@mui/material";

const CustomButton = ({ color = "primary", title, loading }) => {
  return (
    <Box sx={{ mt: 2 }}>
      <Button
        variant="contained"
        color={color}
        disabled={loading ? true : false}
      >
        {title}
      </Button>
    </Box>
  );
};

export default CustomButton;
