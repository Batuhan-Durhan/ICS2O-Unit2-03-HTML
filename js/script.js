// Copyright (c) 2022 Batuhan Durhan All rights reserved
//
// Created by: Batuhan Durhan
// Created on: March 2022
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function enterClicked() {
  // input
  const streetName = document.getElementedById("street-name").value
  const streetNumber = parseInt(document.getElementedById("street-number").value)

  //output
  document.getElementedById("address").innerHTML = 
    "Your info is: " + streetName + ", streetNumber " + streetNumber + "."
}
