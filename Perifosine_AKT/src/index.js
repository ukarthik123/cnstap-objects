function cnstap(inputs){
  // inputs = genonmic indicators

  // 0, 1, 2
  // 0, 1, 2
  // 0, 1
  var gi1 = inputs.percent_tumor
  var gi2 = inputs.parsons_score
  var gi3 = inputs.trial_considered

  var weights = {
    "two":2,
    "three":3,
    "five":5,
    "ten":10,
    "twenty":20
  }

  var Perifosine_AKT = {
      "tumor_in_vitro":2,
      "tumor_in_vivo":2,
      "phase_one":2,
      "cns_data_response":1,
      "brain_penetration":2,
      "fda_approve":1,
      "clonality":0,
      "varient_tier":0,
      "clinical_trial":0
  }

  Perifosine_AKT.clonality = gi1
  Perifosine_AKT.varient_tier = gi2
  Perifosine_AKT.clinical_trial = gi3

  var score = (Perifosine_AKT.tumor_in_vitro*weights.two) +
              (Perifosine_AKT.tumor_in_vivo*weights.three) +
              (Perifosine_AKT.phase_one*weights.three) +
              (Perifosine_AKT.cns_data_response*weights.five) +
              (Perifosine_AKT.brain_penetration*weights.five) +
              (Perifosine_AKT.fda_approve*weights.ten) +
              (Perifosine_AKT.clonality*weights.five) +
              (Perifosine_AKT.varient_tier*weights.three) +
              (Perifosine_AKT.clinical_trial*weights.twenty)


  return score
  // return drugs["Perifosine_AKT"]["tumor_in_vitro"]
  // return "Welcome to Knowledge Grid, " + " " + outputs["test"] + " " + outputs["test2"]
}