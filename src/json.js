export const json = {
  pages: [
    {
      elements: [
        {
          type: "panel",
          name: "patienName",
          elements: [
            {
              type: "text",
              name: "patienFirstName",
              title: "(First)",
              isRequired: true,
            },
            {
              type: "text",
              name: "patientLastName",
              startWithNewLine: false,
              title: "(Last)",
              isRequired: true,
            },
          ],
          questionTitleLocation: "bottom",
          title: "Patient Name",
        },
        {
          type: "panel",
          name: "patient_information",
          elements: [
            {
              type: "text",
              inputType: "date",
              // // isRequired: true,
              name: "birthDate",
              startWithNewLine: false,
              title: "D.O.B:",
            },
            {
              type: "text",
              name: "patient_number",
              startWithNewLine: false,
              title: "Phone number",
              inputType: "number",
              hideNumber: true,
            },
            {
              type: "text",
              name: "patient_occupation",
              startWithNewLine: false,
              title: "Occupation",
            },
            {
              type: "radiogroup",
              choices: [
                {
                  value: "male",
                  text: "Male",
                },
                {
                  value: "female",
                  text: "Female",
                },
              ],
              colCount: 0,
              name: "sex",
              title: "Sex:",
            },
          ],
          questionTitleLocation: "left",
          title: "Patient Information",
        },
        {
          type: "panel",
          name: "demographic_data",
          elements: [
            {
              name: "height",
              type: "text",
              title: "Height",
            },
            {
              name: "weight",
              startWithNewLine: false,
              type: "text",
              title: "Weight",
            },
            {
              name: "SFpercent",
              startWithNewLine: false,
              type: "text",
              title: "SF%",
            },
            {
              name: "Mpercent",
              startWithNewLine: false,
              type: "text",
              title: "M%",
            },
            {
              name: "TBFpercent",
              startWithNewLine: false,
              type: "text",
              title: "TBF%",
            },
            {
              name: "BMI",
              startWithNewLine: false,
              type: "text",
              title: "BMI",
            },
            {
              name: "RM",
              startWithNewLine: false,
              type: "text",
              title: "RM",
            },
            {
              name: "VFpercent",
              startWithNewLine: false,
              type: "text",
              title: "VF%",
            },
          ],
          // questionTitleLocation: "bottom",
          title: "Demographic Data",
        },
        {
          type: "panel",
          name: "injury_history",
          elements: [
            {
              type: "comment",
              name: "injury_history",
              title: "Injury History",
            },
          ],
        },
        {
          type: "panel",
          name: "pain_scale",
          elements: [
            {
              type: "nouislider",
              name: "pain_scale",
              title: "Pain Scale",
              step: 1,
              rangeMin: 0,
              rangeMax: 10,
            },
          ],
        },
        {
          type: "panel",
          name: "trigger_points",
          elements: [
            {
              type: "comment",
              name: "trigger_points",
              title: "Trigger Points",
            },
          ],
        },
        {
          type: "panel",
          name: "range_of_motion",
          elements: [
            {
              type: "comment",
              name: "range_of_motion",
              title: "Range of Motion",
            },
          ],
        },
        {
          type: "panel",
          name: "postural_assessment",
          title: "Postural Assessment",
          elements: [
            {
              type: "matrixdropdown",
              name: "head",
              title: "Head",
              titleLocation: "hidden",
              horizontalScroll: true,
              columnMinWidth: "130px",
              columns: [
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Neutral"],
                  cellType: "checkbox",
                },

                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Forward"],
                  cellType: "checkbox",
                },
              ],
              rows: [{ value: "Head" }],
            },
            {
              type: "matrixdropdown",
              name: "shoulder",
              title: "Shoulder",
              titleLocation: "hidden",
              horizontalScroll: true,
              columnMinWidth: "130px",
              columns: [
                {
                  // name: "using",
                  // title: "Do you use it?",
                  choices: ["Left", "Right"],
                  cellType: "radiogroup",
                },
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Neutral"],
                  cellType: "checkbox",
                },

                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Elevated", "Depressed", "Rounded", "Diskinesia"],
                  cellType: "checkbox",
                },
              ],
              rows: [
                {
                  value: "Shoulders",
                },
              ],
            },
            {
              type: "matrixdropdown",
              name: "thoratic_spine",
              title: "Thoratic Spine",
              titleLocation: "hidden",
              horizontalScroll: true,
              columnMinWidth: "130px",
              columns: [
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Neutral"],
                  cellType: "checkbox",
                },

                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Flattened", "Kyphosis", "Scoliosis"],
                  cellType: "checkbox",
                },
              ],
              rows: [
                {
                  value: "Thoratic Spine",
                },
              ],
            },
            {
              type: "matrixdropdown",
              name: "lumbar_spine",
              title: "Lumbar Spine",
              titleLocation: "hidden",
              horizontalScroll: true,
              columnMinWidth: "130px",
              columns: [
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Neutral"],
                  cellType: "checkbox",
                },
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Increased", "Decreased Lordoisis", "Flat"],
                  cellType: "checkbox",
                },
              ],
              rows: [
                {
                  value: "Lumbar Spine",
                },
              ],
            },
            {
              type: "matrixdropdown",
              name: "pelvis",
              title: "Pelvis",
              titleLocation: "hidden",
              horizontalScroll: true,
              columnMinWidth: "130px",
              columns: [
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Neutral"],
                  cellType: "checkbox",
                },

                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Anterior", "Posterior Tilt"],
                  cellType: "checkbox",
                },
              ],
              rows: [
                {
                  value: "Pelvis",
                },
              ],
            },
            {
              type: "matrixdropdown",
              name: "knees",
              title: "Knees",
              titleLocation: "hidden",
              horizontalScroll: true,
              columnMinWidth: "130px",
              columns: [
                {
                  // name: "using",
                  // title: "Do you use it?",
                  choices: ["Left", "Right"],
                  cellType: "radiogroup",
                },
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Neutral"],
                  cellType: "checkbox",
                },

                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Varus", "Valgus"],
                  cellType: "checkbox",
                },
              ],
              rows: [
                {
                  value: "Knees",
                },
              ],
            },
            {
              type: "matrixdropdown",
              name: "foot_arch",
              title: "Foot Arch",
              titleLocation: "hidden",
              horizontalScroll: true,
              columnMinWidth: "130px",
              columns: [
                {
                  // name: "using",
                  // title: "Do you use it?",
                  choices: ["Left", "Right"],
                  cellType: "radiogroup",
                },
                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Neutral"],
                  cellType: "checkbox",
                },

                {
                  // name: "strength",
                  // title: "What is main strength?",
                  choices: ["Flat", "High", "Collapsed", "Ext. Rot"],
                  cellType: "checkbox",
                },
              ],
              rows: [
                {
                  value: "Foot Arch",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  showQuestionNumbers: "off",
  title: "Patient Medical History",
};
