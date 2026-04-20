// Program flow data
// Each row is either a content row or a break row.
// Content rows: { time, cells: [ { type, label, content } ] }
// Break rows:   { type: 'break', text }
// Cell types: 'lead' | 'prog' | 'speak' | 'coord' | 'host' | 'tech' | 'part' | 'stby'

const programData = [
  {
    time: "7:00–8:00 am",
    cells: [
      { type: "stby",  label: "Preparation",        content: "Arrives; reviews opening message and MV walkthrough; coordinates slides with Tech Support" },
      { type: "prog",  label: "Welcomes",            content: "Greet participants; oversee venue and program setup" },
      { type: "stby",  label: "Preparation",         content: "Reviews materials privately; coordinates slides with Tech Support" },
      { type: "coord", label: "Logistics + Attendance", content: "Set up activity materials; place attendance sheet and pen on the Facilitator's Table; manage sign-ins as participants arrive" },
      { type: "host",  label: "Breakfast Setup",     content: "Set up and manage breakfast service; ensure food and drinks are ready before 7am" },
      { type: "tech",  label: "Full AV Setup",       content: "Set up and test projector, TV, lights, sound, and mics; full run-through before 8am" },
    ]
  },
  {
    time: "8:00–8:30 am",
    cells: [
      { type: "lead",  label: "Opening Message (Dr. Roset)", content: "Delivers leadership opening message; sets the tone and affirms the team" },
      { type: "prog",  label: "Facilitates",         content: "Introduces leadership rep; leads icebreaker; leads debrief" },
      { type: "stby",  label: "On standby",          content: "Rests; not yet introduced to the group" },
      { type: "coord", label: "Activity Support",    content: "Distribute manila paper and markers; monitor attendance sheet; collect materials after icebreaker" },
      { type: "host",  label: "Breakfast Closeout",  content: "Clear and close out breakfast service; standby after" },
      { type: "part",  label: "Participant (On-Call)", content: "Joins icebreaker as participant; available for AV assistance if needed" },
    ]
  },
  {
    time: "8:30–9:00 am",
    cells: [
      { type: "part",  label: "Joins as Participant",          content: "Prepares for MV segment; joins activity as participant" },
      { type: "prog",  label: "Facilitates — Full",  content: "Delivers Active Listening talk; gives activity instructions; leads gallery share and debrief" },
      { type: "speak", label: "Roams and Supports",  content: "Walks around during activity; encourages groups and answers questions" },
      { type: "coord", label: "Activity Support",    content: "Distribute manila paper and markers; walk around to support groups; collect all materials after debrief" },
      { type: "stby",  label: "On standby",          content: "Rests after breakfast closeout" },
      { type: "part",  label: "Participant (On-Call)", content: "Joins activity as participant; available for AV assistance if needed" },
    ]
  },
  {
    time: "9:00–9:45 am",
    cells: [
      { type: "lead",  label: "MV Walkthrough (Tina, Julie, Cha)", content: "Delivers Mission and Vision walkthrough per Hospital; gives context and meaning behind each statement" },
      { type: "prog",  label: "Introduces + Debrief", content: "Introduces MV Presenter; gives activity instructions; leads debrief after" },
      { type: "speak", label: "Roams and Supports",  content: "Walks around during activity; encourages groups" },
      { type: "coord", label: "Activity Support",    content: "Distribute index cards, pens, manila paper, and markers; walk around to support groups; collect all materials after debrief" },
      { type: "stby",  label: "On standby",          content: "Rests; available if food or logistics support is needed" },
      { type: "part",  label: "Participant (On-Call)", content: "Joins activity as participant; available for AV assistance if needed" },
    ]
  },
  {
    type: "break",
    text: "AM Water · Snack · Nature Break  |  Hospitality Host manages snack service  |  Support Coordinator collects any remaining materials"
  },
  {
    time: "10:00 am–12:00 pm",
    cells: [
      { type: "part",  label: "Joins as Participant", content: "Participates in activity alongside the team" },
      { type: "stby",  label: "On standby",          content: "Observes; available to assist speaker if needed" },
      { type: "speak", label: "Facilitates + Roams", content: "Delivers Goal Setting talk; gives activity instructions; walks around to support groups; leads debrief" },
      { type: "coord", label: "Activity Support",    content: "Distribute index cards, pens, manila paper and markers; walk around to support groups; collect all outputs after debrief; photograph outputs" },
      { type: "host",  label: "Lunch Preparation",   content: "Prepares and sets up lunch service toward end of session; ensures food is ready for 12pm" },
      { type: "part",  label: "Participant (On-Call)", content: "Joins activity as participant; available for AV assistance if needed" },
    ]
  },
  {
    type: "break",
    text: "Lunch Break  |  Hospitality Host manages lunch service  |  Support Coordinator organizes collected materials"
  },
  {
    time: "1:00–2:45 pm",
    cells: [
      { type: "part",  label: "Joins as Participant", content: "Participates in Be Proactive activities alongside the team" },
      { type: "stby",  label: "On standby",          content: "Observes; available to assist speaker if needed" },
      { type: "speak", label: "Facilitates + Roams", content: "Delivers Be Proactive talk; gives instructions for all three activities; walks around to support groups; leads debrief" },
      { type: "coord", label: "Activity Support",    content: "Don't distribute anything during Activity 1; distribute manila paper and markers during Activities 2 and 3; walk around to support groups; collect all materials after each activity debrief" },
      { type: "stby",  label: "On standby",          content: "Rests after lunch service; available if food or logistics support is needed" },
      { type: "part",  label: "Participant (On-Call)", content: "Joins Be Proactive activities as participant; available for AV assistance if needed" },
    ]
  },
  {
    type: "break",
    text: "PM Water · Snack · Nature Break  |  Hospitality Host manages snack service  |  Support Coordinator collects any remaining materials"
  },
  {
    time: "3:00–3:30 pm",
    cells: [
      { type: "part",  label: "Joins as Participant", content: "Participates in activity alongside the team" },
      { type: "prog",  label: "Facilitates — Full",  content: "Introduces Prioritization; gives activity instructions; leads debrief" },
      { type: "speak", label: "Roams", content: "Walks around during activity" },
      { type: "coord", label: "Activity Support",    content: "Distribute sticky notes, pens, manila papers and markers; collect all materials after debrief" },
      { type: "stby",  label: "On standby",          content: "Rests; available if snack or logistics support is needed" },
      { type: "part",  label: "Participant (On-Call)", content: "Joins activity as participant; available for AV assistance if needed" },
    ]
  },
  {
    time: "3:30–4:30 pm",
    cells: [
      { type: "part",  label: "Joins as Participant", content: "Participates in activity; prepares closing message and any prize presentation during activity" },
      { type: "stby",  label: "On standby",          content: "Observes; available to assist speaker if needed" },
      { type: "speak", label: "Delivers Talk + Roams", content: "Delivers Prioritization talk; gives instructions for the activity; walks around all groups; enriches discussion with examples; leads debrief" },
      { type: "coord", label: "Activity Support",    content: "Distribute scenario cards, manila papers and markers; keep time per group; collect all outputs after debrief" },
      { type: "stby",  label: "On standby",          content: "Rests; coordinates venue close-out preparation" },
      { type: "part",  label: "Participant (On-Call)", content: "Joins activity as participant; available for AV assistance if needed; returns to AV station before 4:30pm" },
    ]
  },
  {
    time: "4:30–5:00 pm",
    cells: [
      { type: "lead",  label: "Closing Message + Prizes (Dr. Chit + Dr. Roset)", content: "Delivers closing message; presents prizes or recognition if applicable; affirms the team's commitments" },
      { type: "prog",  label: "Leads Closing",       content: "Synthesis of all four habits; leads activity; introduces leadership rep for closing" },
      { type: "speak", label: "Closing Remarks",     content: "Affirms the group's commitments" },
      { type: "coord", label: "Wrap-up",             content: "Distribute index cards, pens, manila paper and markers; collect the pens; set up group photo moment" },
      { type: "host",  label: "Venue Close-out",     content: "Coordinate full venue close-out; manage remaining food and logistics; confirm nothing is left behind" },
      { type: "tech",  label: "Closing AV",          content: "Manage mic for leadership rep and speaker; ensure sound and lighting are set for closing; begin full equipment breakdown after program ends" },
    ]
  },
];
