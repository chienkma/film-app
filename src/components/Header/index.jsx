import { AccountCircle, Bookmark, Search } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useState } from "react";
import SignIn from "../../features/Auth/components/SignIn";
function Header() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='flex justify-around items-center bg-[#1b2d3c] h-[65px] text-white'>
      <div>
        <img
          className='w-[100px] h-[30px]'
          src='https://rubee.com.vn/admin/webroot/upload/image/images/logo-mgm.jpg'
        />
      </div>
      <div className='bg-[#273e52] px-[40px] py-[10px] rounded-[20px]'>
        <Search />
        <input
          className='bg-[#273e52] outline-none px-3'
          type='text'
          placeholder='Search'
        />
      </div>
      <button className='bg-gradient-to-r from-cyan-900 to-blue-700 rounded-[20px] px-[15px] py-[6px]'>
        <Bookmark />
        <span className='px-4'>Favorite film</span>
      </button>
      <button
        onClick={handleClickOpen}
        className='bg-gradient-to-r from-cyan-900 to-blue-700 rounded-[20px] px-[15px] py-[6px]'
      >
        <AccountCircle />
        <span className='px-4'>Sign In</span>
      </button>
      <Dialog open={open} onClose={handleClose}>
        <IconButton onClick={handleClose}>
          <CloseIcon
            sx={{
              color: "black",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          />
        </IconButton>
        <DialogContent>
          <SignIn />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;
