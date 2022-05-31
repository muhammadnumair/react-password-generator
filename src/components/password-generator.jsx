import { useState } from "react";
import {
  Form,
  Button,
  Spinner,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { toast } from "react-toastify";
import {
  lowerCaseLetters,
  numbers,
  specialCharacters,
  upperCaseLetters,
} from "../common/characters";
import { copyToClipboard, getMultipleRandoms } from "../common/utils";

const PasswordGenerator = () => {
  const [loading, setLoading] = useState(false);

  // Fields States
  const [password, setPassword] = useState("");
  const [lowerCaseChar, setLowerCaseChar] = useState(false);
  const [upperCaseChar, setUpperCaseChar] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [numbersChar, setNumbersChar] = useState(false);
  const [passwordLength, setPasswordLength] = useState(20);

  const handleGeneratePassword = () => {
    setLoading(true);
    if (!lowerCaseChar && !upperCaseChar && !numbersChar && !specialChar) {
      toast.error("Please select at least one criteria!");
      setLoading(false);
      return false;
    }

    let characters = [];
    if (lowerCaseChar) {
      characters = [...characters, ...lowerCaseLetters];
    }

    if (upperCaseChar) {
      characters = [...characters, ...upperCaseLetters];
    }

    if (specialChar) {
      characters = [...characters, ...specialCharacters];
    }

    if (numbersChar) {
      characters = [...characters, ...numbers];
    }

    const password = getMultipleRandoms(characters, passwordLength);
    setPassword(password);
    setLoading(false);

    toast.success("Password generated as per selected criteria!");
  };

  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Generated password goes here"
          aria-label="Generated Password"
          aria-describedby="genertared-password"
          disabled
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          id="copy-to-clipboard"
          onClick={() => copyToClipboard(password)}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clipboard2-check-fill"
            viewBox="0 0 16 16"
          >
            <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
            <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
          </svg>
        </Button>
      </InputGroup>
      <Form.Label>Password length</Form.Label>
      <Form.Range
        onChange={(event) => setPasswordLength(event.target.value)}
        value={passwordLength}
      />
      <Form.Check
        type="switch"
        id="lowercase-characters"
        label="Lowercase Characters"
        className="mb-2"
        value={lowerCaseChar}
        onChange={() => setLowerCaseChar(!lowerCaseChar)}
      />
      <Form.Check
        type="switch"
        id="uppercase-characters"
        label="Uppercase Characters"
        className="mb-2"
        onChange={() => setUpperCaseChar(!upperCaseChar)}
      />
      <Form.Check
        type="switch"
        id="numbers"
        label="Numbers"
        className="mb-2"
        onChange={() => setNumbersChar(!numbersChar)}
      />
      <Form.Check
        type="switch"
        id="special-characters"
        label="Special Characters"
        className="mb-2"
        onChange={() => setSpecialChar(!specialChar)}
      />
      <Button
        variant="primary"
        className="mt-4"
        disabled={loading}
        onClick={() => handleGeneratePassword()}
      >
        {!loading ? (
          `Generate Password`
        ) : (
          <div>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            {"  "}
            Generating Password...
          </div>
        )}
      </Button>
    </>
  );
};

export default PasswordGenerator;
