import React, { useState } from "react";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box component="div" sx={{ width: "100%" }}>
      {/* Thumbnail Container */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          // Adjusted box shadow for better visibility on a dark background
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-5px)",
            // Adjusted hover shadow for better contrast
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.7)",
            "& .overlay": { opacity: 1 },
            "& .hover-content": {
              transform: "translate(-50%, -50%)",
              opacity: 1,
            },
            "& .certificate-image": {
              filter: "contrast(1.05) brightness(1) saturate(1.05)",
            },
          },
        }}
      >
        {/* Certificate Image with Initial Filter */}
        <Box
          sx={{
            position: "relative",
            // Removed the light overlay to prevent washing out the dark image
          }}
        >
          <img
            className="certificate-image"
            src={ImgSertif}
            alt="Certificate"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
              // Added a slight initial brightness and contrast to make it more visible
              filter: "contrast(1.2) brightness(1.1) saturate(1.1)",
              transition: "filter 0.3s ease",
              cursor: "pointer",
            }}
            onClick={handleOpen}
          />
        </Box>

        {/* Hover Overlay */}
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            transition: "all 0.3s ease",
            cursor: "pointer",
            zIndex: 2,
            // Changed overlay background to a semi-transparent dark color
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
          onClick={handleOpen}
        >
          {/* Hover Content */}
          <Box
            className="hover-content"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -60%)",
              opacity: 0,
              transition: "all 0.4s ease",
              textAlign: "center",
              width: "100%",
              // Changed text color to white for contrast
              color: "#FFFFFF",
            }}
          >
            <FullscreenIcon
              sx={{
                fontSize: 40,
                mb: 1,
                // Adjusted shadow color to be dark
                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))",
              }}
            />
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              View Certificate
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
          sx: {
            // Changed backdrop to a semi-transparent dark color
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(4px)",
          },
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
            "&:focus": { outline: "none" },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 16,
              top: 16,
              // Changed button color to white
              color: "#FFFFFF",
              // Changed button background to a semi-transparent dark color
              bgcolor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1,
              padding: 1,
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.8)",
                transform: "scale(1.1)",
              },
            }}
            size="large"
            aria-label="close modal"
          >
            <CloseIcon sx={{ fontSize: 24 }} />
          </IconButton>

          {/* Modal Image */}
          <img
            src={ImgSertif}
            alt="Certificate Full View"
            style={{
              display: "block",
              maxWidth: "100%",
              maxHeight: "90vh",
              margin: "0 auto",
              objectFit: "contain",
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;