
import { TextField } from '@mui/material';
import styled from '@emotion/styled';

const CreatePostTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'gold',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'gold',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  });

export default CreatePostTextField