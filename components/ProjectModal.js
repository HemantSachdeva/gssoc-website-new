import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { EmailIcon } from "@chakra-ui/icons";
const ProjectModal = ({ currProject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [scrollBehavior, setScrollBehavior] = React.useState("inside");
  const btnRef = React.useRef();
  return (
    <div className="w-full absolute bottom-0">
      <button ref={btnRef} onClick={onOpen} 
        className=" bg-gradient-to-b from-primary_orange-0 to-orange-600 text-lg text-white dark:text-black font-medium rounded-b-md py-1 hover:bg-gradient-to-t hover:from-primary_orange-0 hover:to-orange-600 w-full"
        >
        Project Details
      </button>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent className="dark:bg-darkmode_gray-0 h-96">
          <ModalHeader className="flex text-primary_orange-0">
            <p className="mr-3">
              {currProject.project_id}
              {"."}
            </p>
            <a 
            target="_blank"
            rel="noreferrer"
            href={currProject.project_link}>
            {currProject.project_name}
            </a>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={15} /> */}
            <div className="flex flex-row justify-between px-6">
              <a
                target="_blank"
                rel="noreferrer"
                href={currProject.project_video_link}
              >
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="w-10 h-10 text-youtube-0"
                    icon={faYoutube}
                    size="2x"
                  />
                  <p className="ml-2 font-serif font-medium text-base text-justify text-black dark:text-white">
                    Project Video
                  </p>
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={"mailto:" + currProject.email}
              >
                <div className="flex items-center">
                  <EmailIcon color="orange.500" w={7} h={7} />
                  <p className="ml-2 font-serif font-medium text-base text-justify text-black dark:text-white">
                    Admin E-mail
                  </p>
                </div>
              </a>
              <div>
                <ModalCloseButton color="orange" />
              </div>
            </div>
            <div className="flex flex-col px-6 mt-5">
              <p className="text-primary_orange-0 font-semibold font-serif text-lg">
                Description
              </p>
              <p className="font-serif text-base dark:text-white">
                {currProject.project_description}
              </p>
            </div>
            {/* <p className="text-primary_orange-0 px-6 mt-5 font-semibold font-serif text-lg">
              Mentors
            </p>
            <div className="flex flex-row flex-wrap px-6 space-x-5 mt-5">
              {currProject.mentors_id.map((mentor, j) => {
                return (
                  <a target="_blank" rel="noreferrer" href={mentor.github} key={j}>
                    <Button
                      key={j}
                      size="sm"
                      colorScheme="black"
                      variant="outline"
                      className="mb-2"
                    >
                      <FontAwesomeIcon
                        className="w-5 h-5 text-black dark:text-white"
                        icon={faGithub}
                        size="2x"
                      />
                      <p className="font-serif text-black font-light dark:text-white">
                        {mentor.name}
                      </p>
                    </Button>
                  </a>
                );
              })}
            </div> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProjectModal;
