import React from "react";
import {
  Typography,
  Box,
  Link,
  // Paper,
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableHead,
  // TableRow,
  // Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Introduction: React.FC = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Guide
      </Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Overview</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            This application visualizes our generated knowledge graph data. Simply upload the parquet files to visualize the data without
            needing additional software like Gephi, Neo4j, or Jupyter Notebook.
          </Typography>

          <Box
            component="img"
            src={process.env.PUBLIC_URL + "/demo.png"}
            alt="Demo"
            sx={{ mt: 2, mb: 2, width: "100%" }}
          />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="ul" sx={{ '& > li': { mb: 2 } }}>
            <li>
              <Typography variant="body1">
                <strong>Flexibility:</strong> Upload any parquet files in the{" "}
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                    px: 0.5,
                    py: 0.25,
                    borderRadius: 1,
                  }}
                >
                  Upload Artifacts
                </Box>{" "}
                tab.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Graph Visualization:</strong> View the graph in 2D or 3D in the{" "}
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                    px: 0.5,
                    py: 0.25,
                    borderRadius: 1,
                  }}
                >
                  Graph Visualization
                </Box>{" "}
                tab.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Data Tables:</strong> Display data from the parquet files in
                the{" "}
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                    px: 0.5,
                    py: 0.25,
                    borderRadius: 1,
                  }}
                >
                  Data Tables
                </Box>{" "}
                tab.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Search Functionality:</strong> Fully supports search,
                allowing users to focus on specific nodes or relationships.
              </Typography>
            </li>
            {/* <li>
              <Typography variant="body1">
                <strong>Local Processing:</strong> Your artifacts are processed
                locally on your machine. They are not uploaded anywhere, ensuring
                your data remains secure and private.
              </Typography>
            </li> */}
          </Box>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Contact Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center">
              <LanguageIcon sx={{ mr: 1 }} />
              <Link href="https://projectingsuccess.co.uk/" target="_blank" rel="noopener noreferrer">
                https://projectingsuccess.co.uk/
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <EmailIcon sx={{ mr: 1 }} />
              <Link href="mailto:enquiries@projectingsuccess.co.uk">
                enquiries@projectingsuccess.co.uk
              </Link>
            </Box>
            <Box display="flex" alignItems="center">
              <PhoneIcon sx={{ mr: 1 }} />
              <Link href="tel:+442038215203" target="_blank" rel="noopener noreferrer">
                020 3821 5203
              </Link>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Using the Search Functionality</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            Once the{" "}
            <Link
              href="https://github.com/noworneverev/graphrag-api"
              target="_blank"
              rel="noopener"
            >
              graphrag-api
            </Link>{" "}
            server is up and running, you can perform searches directly through the
            GraphRAG Visualizer. This allows you to easily search and explore data
            that is hosted on your local server.
          </Typography>

          <Box
            component="img"
            src={process.env.PUBLIC_URL + "/search.png"}
            alt="Search"
            sx={{ mt: 2, mb: 2, width: "100%" }}
          />
        </AccordionDetails>
      </Accordion> */}

      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Graph Data Model</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" gutterBottom>
            The logic for creating relationships for text units, documents,
            communities, and covariates is derived from the{" "}
            <Link
              href="https://github.com/microsoft/graphrag/blob/main/examples_notebooks/community_contrib/neo4j/graphrag_import_neo4j_cypher.ipynb"
              target="_blank"
              rel="noopener"
            >
              GraphRAG import Neo4j Cypher notebook
            </Link>
            .
          </Typography>
        </AccordionDetails>
      </Accordion> */}

      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Nodes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Node</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Type</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell>
                    <Chip label="RAW_DOCUMENT" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Text Unit</TableCell>
                  <TableCell>
                    <Chip label="CHUNK" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Community</TableCell>
                  <TableCell>
                    <Chip label="COMMUNITY" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Finding</TableCell>
                  <TableCell>
                    <Chip label="FINDING" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Covariate</TableCell>
                  <TableCell>
                    <Chip label="COVARIATE" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Entity</TableCell>
                  <TableCell>
                    <i>Varies</i>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion> */}

      {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Relationships</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper} sx={{ mb: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>Source Node</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Relationship</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Target Node</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Entity</TableCell>
                  <TableCell>
                    <Chip label="RELATED" size="small" />
                  </TableCell>
                  <TableCell>Entity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Text Unit</TableCell>
                  <TableCell>
                    <Chip label="PART_OF" size="small" />
                  </TableCell>
                  <TableCell>Document</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Text Unit</TableCell>
                  <TableCell>
                    <Chip label="HAS_ENTITY" size="small" />
                  </TableCell>
                  <TableCell>Entity</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Text Unit</TableCell>
                  <TableCell>
                    <Chip label="HAS_COVARIATE" size="small" />
                  </TableCell>
                  <TableCell>Covariate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Community</TableCell>
                  <TableCell>
                    <Chip label="HAS_FINDING" size="small" />
                  </TableCell>
                  <TableCell>Finding</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Entity</TableCell>
                  <TableCell>
                    <Chip label="IN_COMMUNITY" size="small" />
                  </TableCell>
                  <TableCell>Community</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion> */}
    </Box>
  );
};

export default Introduction;
