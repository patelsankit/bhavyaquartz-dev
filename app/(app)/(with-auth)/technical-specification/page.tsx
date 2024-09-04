"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const columns = [
  { key: "id", label: "ID" },
  { key: "testperformed", label: "TEST PERFORMED" },
  { key: "teststandard", label: "TEST STANDARD" },
  { key: "results", label: "RESULTS" },
];

const rows = [
  {
    id: "01",
    testperformed: "App. Density Kg,/dm3",
    teststandard: "EN14617-1",
    results: "2.2 -2.45",
  },
  {
    id: "02",
    testperformed: "Water Absorption",
    teststandard: "EN14617-1",
    results: "≤0.04",
  },
  {
    id: "03",
    testperformed: "Flexural Strength(Mpa)",
    teststandard: "EN14617-2",
    results: "50 - 60",
  },
  {
    id: "04",
    testperformed: "Dimensional Stability",
    teststandard: "EN14617-12",
    results: "Class A",
  },
  {
    id: "05",
    testperformed: "Impact Resistance (Joule)",
    teststandard: "EN14617-9",
    results: "4- 9 Joule",
  },
  {
    id: "06",
    testperformed: "Compressive Strength (Mpa)",
    teststandard: "EN14617-15",
    results: "170 -220",
  },
  {
    id: "07",
    testperformed: "Abrasion Resistance",
    teststandard: "ENI 4617-4",
    results: "Groove Length-21.1mm",
  },
  {
    id: "08",
    testperformed: "Frost Resistance",
    teststandard: "DIN 52104",
    results: "Complies With Standard",
  },
  {
    id: "09",
    testperformed: "Surface Hardness (Mohs Scale)",
    teststandard: "EN 101",
    results: "6.0-7.0",
  },
  {
    id: "10",
    testperformed: "Stain Resistance",
    teststandard: "ANSI Z124.6",
    results: "Pass",
  },
  {
    id: "11",
    testperformed: "Wear & Cleanability",
    teststandard: "ANSI Z124.6",
    results: "Pass",
  },
  {
    id: "12",
    testperformed: "Chemical Resistance",
    teststandard: "ANSI Z124.6",
    results: "Pass",
  },
  {
    id: "13",
    testperformed: "Chemical Resistance",
    teststandard: "EN1467/-10",
    results: "Class C4",
  },
  {
    id: "14",
    testperformed: "Resistance To Acids",
    teststandard: "ASTM C 650",
    results: "Not Affected",
  },
  {
    id: "15",
    testperformed: "Linear Thermal Expansion(30°-60° )c°-1",
    teststandard: "EN14617 -11",
    results: "2.6x10-6",
  },
  {
    id: "16",
    testperformed: "Boiling Water Resistance",
    teststandard: "NEMA LD3-3.5",
    results: "Pass",
  },
  {
    id: "17",
    testperformed: "High Temperature Resistance",
    teststandard: "NEMA LD3-3.6",
    results: "Pass",
  },
  {
    id: "18",
    testperformed: "Cigarette Test",
    teststandard: "ANSI Z124.6",
    results: "Pass",
  },
  {
    id: "19",
    testperformed: "Fire Classification",
    teststandard: "EN13501-1",
    results: "Wall Cladding: B-S1 -d0, Flooring & Stairs: B-fi-s1",
  },
  {
    id: "20",
    testperformed: "Slip Resistance",
    teststandard: "EN 14231",
    results: "We: 13-21 SRV, Dry. &3-53 SW",
  },
  {
    id: "21",
    testperformed: "Radiation",
    teststandard: "GB 6566-2010",
    results: "Complies With Requirement Of Standard",
  },
  {
    id: "22",
    testperformed: "Thermal Shock Resistance",
    teststandard: "EN14617-6",
    results:
      "No Visual Defects After 10 Cycle. Loss in Flexural Strength= Loss In Mass = 0.02%-0.05% 0.70/0-1.10/0",
  },
  {
    id: "23",
    testperformed: "Freeze & Thaw Resistance",
    teststandard: "EN14617-5",
    results: "No Defects After 25 Freeze -ThawCycle.",
  },
  {
    id: "24",
    testperformed: "Glossiness Reflection %",
    teststandard: "",
    results: "45-70",
  },
  {
    id: "25",
    testperformed: "Surface Slip Resistance HONED 400",
    teststandard: "DIN 51130",
    results: "R9",
  },
  {
    id: "26",
    testperformed: "Static Coefficient Of Friction",
    teststandard: "ASTM C 1028",
    results: "Dry: 08, Wet: 0.6",
  },
];

const TechnicalSpecification = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="px-4 container">
        <div className="text-center mb-10">
          <h2 className="h2-title text-center mb-2 text-blue-600 uppercase">
            Specification
          </h2>
          <h1 className="h1-title text-center mb-2">Technical Specification</h1>
        </div>
        <div className="overflow-x-auto">
          <Table
            aria-label="Technical Specification Table"
            className="border-separate border-spacing-0"
          >
            <TableHeader>
              {columns.map((column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              ))}
            </TableHeader>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {getKeyValue(row, column.key)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecification;
