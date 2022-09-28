<template>
  <div id="UI">
    <div class="content" v-if="$store.state.userName">
      <svg id="bongo-cat" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 787.3 433.8"><defs><symbol id="eye" fill="#fefefe" data-name="eye" viewBox="0 0 19.2 18.7"><circle cx="9.4" cy="9.1" r="8"></circle><path d="M16.3,5.1a1.3,1.3,0,0,1-1.4-.3,7.2,7.2,0,0,0-4.5-2.6A7.2,7.2,0,0,0,5.5,3.5,6.8,6.8,0,0,0,2.8,7.8a6.8,6.8,0,0,0,1,4.8,6.2,6.2,0,0,0,4,2.7,6.1,6.1,0,0,0,4.6-.7,6.7,6.7,0,0,0,2.9-3.7,6.4,6.4,0,0,0-.5-4.5c-.1-.2.8-1,1.5-1.3s2.2,0,2.3.5a9.4,9.4,0,0,1-.2,7.2,9.4,9.4,0,0,1-5.1,5.1,9,9,0,0,1-7,.2A9.6,9.6,0,0,1,1,13.5,9.2,9.2,0,0,1,.4,6.6,8.9,8.9,0,0,1,4.6,1.3,9,9,0,0,1,11.2.2,9.3,9.3,0,0,1,16.7,4C16.9,4.3,17,4.8,16.3,5.1Z"></path></symbol><symbol id="paw-pads" data-name="paw-pads" viewBox="0 0 31.4 33.9"><path d="M6.8,16a3.7,3.7,0,0,1,1.1,2.8,3.2,3.2,0,0,1-1.6,2.6L5,21.8H4.4a2.8,2.8,0,0,1-1.8.3A4.2,4.2,0,0,1,.2,19.1,7.7,7.7,0,0,1,0,17.6a2.8,2.8,0,0,1,.6-2,3.2,3.2,0,0,1,2.1-.8H4A5,5,0,0,1,6.8,16Zm7.3-4.8a1.8,1.8,0,0,0,.7-.5l.7-.4a3.5,3.5,0,0,0,1.1-1,3.2,3.2,0,0,0,.3-1.4,1.4,1.4,0,0,0-.2-.6,3.4,3.4,0,0,0-.3-2.4,3.2,3.2,0,0,0-2.1-1.5H13.1a4.7,4.7,0,0,0-1.6.4,2,2,0,0,0-.9.9l-.4.6v.4a6.1,6.1,0,0,0-.5,1.2,4.3,4.3,0,0,0,0,1.6,3.5,3.5,0,0,0,.5,2l.7.6a3.3,3.3,0,0,0,1.7.7A3,3,0,0,0,14.1,11.2ZM22.7,7l.6.2h.3A2.3,2.3,0,0,0,25,6.8l.4-.3.6-.3a7.5,7.5,0,0,0,1.5-.9,4.2,4.2,0,0,0,.8-1.2,1.9,1.9,0,0,0,.1-1.5A2.6,2.6,0,0,0,27.5,1,3.5,3.5,0,0,0,23.6.3a3.8,3.8,0,0,0-2,1.5,4.8,4.8,0,0,0-.7,2,3.6,3.6,0,0,0,.9,2.6ZM31,24.1a13.5,13.5,0,0,0-2.2-4.7,36.6,36.6,0,0,0-3.2-3.9,5.3,5.3,0,0,0-5-1.9,10.5,10.5,0,0,0-4.5,2.2A5.6,5.6,0,0,0,13.5,20a15.1,15.1,0,0,0,1.2,6.3c.8,2,1.7,4,2.6,5.9a1.6,1.6,0,0,0,1.5.8,1.7,1.7,0,0,0,1.9.9,17.1,17.1,0,0,0,8.7-4.8,8.2,8.2,0,0,0,1.7-2C31.6,26.3,31.3,25,31,24.1Z" fill="#ef97b0"></path></symbol></defs><g id="head"><g id="head__outline"><path d="M303.2,186.3c4-7,14.8-20.2,20-26,17-19,34.6-34.9,43-41l12-8s16.6-32,21-33c9-2,33,22,33,22s20-9,79,7c41,11.1,47,14,57,22,7.5,6,18,16,18,16s33.7-19.5,41-15-2,66-2,66,5.9,12.9,11,22c9.1,16.2,13.6,20.2,19,31,3.6,7.2,8.4,28.5,10.5,43.5l-385-62Z" fill="#010101"></path><path fill="#fefefe" d="M302.9,186.9c-1.2,3-5.9,12.6-9,18.8l-12.5,25.5-.6-1.2c32.2,4.8,64.4,9.2,96.6,13.6s64.4,8.9,96.5,13.7,64.3,9.7,96.4,14.9,64.1,10.5,96.2,15.8l-5.6,5.5c-1.2-8.5-2.8-17.1-4.8-25.6-1-4.1-2.1-8.4-3.4-12.3l-.5-1.4-.5-1.4-.6-1.3-.7-1.3a59.5,59.5,0,0,0-3.1-5.5c-2.2-3.6-4.7-7.2-7.1-11s-4.8-7.6-7-11.5c-4.5-7.9-8.3-15.9-12.1-24a4,4,0,0,1-.3-2.6h0c1.4-9.1,2.7-18.2,3.7-27.4.5-4.5.9-9.1,1.2-13.7s.4-9.1.2-13.4a26.4,26.4,0,0,0-.8-6,8.1,8.1,0,0,0-.3-1.1c-.1-.3-.2-.4-.1-.3h.3c0,.1.1.1,0,.1h-.6a11.9,11.9,0,0,0-2.5.2,16.3,16.3,0,0,0-3,.7,56.7,56.7,0,0,0-6.2,2.1,212.6,212.6,0,0,0-24.5,11.9h-.1a3.9,3.9,0,0,1-4.7-.6c-4.9-4.7-10-9.4-15.1-13.8a86.6,86.6,0,0,0-7.9-6,46.1,46.1,0,0,0-8.5-4.6c-6-2.6-12.6-4.6-19.2-6.7l-19.8-5.7a324.9,324.9,0,0,0-40-8.9,196.8,196.8,0,0,0-20.2-1.8c-1.7,0-3.4-.1-5.1,0h-2.5l-2.5.2-2.5.2-2.4.4-2.4.5-1.1.3h-.5l-.4.2H433a2.5,2.5,0,0,1-2.6-.7c-4.6-4.6-9.5-9.1-14.5-13.2a82.7,82.7,0,0,0-7.9-5.7L403.9,81a10.8,10.8,0,0,0-4-.9c-.1,0-.3,0-.3.1h0l-.7.5-1.5,1.7c-1,1.2-2,2.6-2.9,3.9s-3.6,5.5-5.3,8.3c-3.5,5.7-6.8,11.4-9.9,17.3h0l-.4.4-10.2,6.6a53.6,53.6,0,0,0-4.9,3.4l-4.6,3.8c-6.2,5.1-12.1,10.6-17.9,16.2s-11.3,11.4-16.7,17.4c-2.7,3-5.3,6.1-7.8,9.2s-5,6.3-7.4,9.5c-4.2,5.6-7,10-5.7,7.1a34.1,34.1,0,0,1,2.1-3.8l3.8-5.6c2.9-4,6.3-8.3,8.5-10.9s4.4-5.2,6.7-7.7l6.9-7.4c4.7-4.9,9.4-9.7,14.3-14.3s9.8-9.3,15-13.7l4-3.2,4.2-2.9,8.3-5.7-.4.4c3-5.9,6.1-11.8,9.4-17.7,1.6-2.9,3.3-5.8,5.1-8.6l2.9-4.3,1.8-2a7.5,7.5,0,0,1,1.3-1.1c.1-.2.6-.4,1-.5l.9-.2h1.7l1.4.2,2.7.8c1.7.7,3.3,1.5,4.8,2.3a84,84,0,0,1,8.5,5.7A175.7,175.7,0,0,1,434,98.5l-2.9-.6.8-.3.7-.2L434,97l2.7-.7,2.7-.5a23,23,0,0,1,2.6-.3l2.7-.3,2.7-.2h5.3a182.1,182.1,0,0,1,21,1.3,332.5,332.5,0,0,1,41.1,8.4l20,5.5c6.7,2,13.4,4,20.1,6.7a65.3,65.3,0,0,1,9.8,5.1c3.1,2.1,5.9,4.3,8.6,6.5,5.4,4.5,10.6,9.2,15.7,14l-4.8-.6c4.1-2.4,8.2-4.6,12.4-6.7s8.6-4.2,13-6c2.3-.9,4.6-1.7,7-2.4a23.4,23.4,0,0,1,3.8-.9,20,20,0,0,1,4.4-.4h1.3l1.5.4a5.1,5.1,0,0,1,1.7.7l.9.7.8.7a8.3,8.3,0,0,1,1.6,2.6,12.7,12.7,0,0,1,.8,2.3,44.6,44.6,0,0,1,1.1,7.7c.2,5,.1,9.7-.1,14.4s-.7,9.5-1.2,14.1c-.9,9.4-2.1,18.6-3.6,27.9l-.3-2.6c3.7,7.9,7.5,15.8,11.8,23.3,2.1,3.7,4.4,7.4,6.8,11s4.9,7.2,7.3,11.1c1.3,2,2.4,4,3.5,6.1a10.9,10.9,0,0,0,.8,1.5l.8,1.8.7,1.7.6,1.7c1.5,4.4,2.6,8.7,3.7,13.1a262,262,0,0,1,5.2,26.4,4.9,4.9,0,0,1-4.1,5.6h-1.5c-32.1-5-64.2-9.9-96.3-15.1s-64.1-10.6-96.1-16.1-64-11.4-96-17.4-63.9-11.9-95.9-17.4h-.1a.8.8,0,0,1-.6-.9v-.2l16.6-32.1C299.8,192.2,304.1,183.9,302.9,186.9Z"></path></g><g id="head__face"><g id="eyes"><use width="19.2" height="18.7" transform="translate(474.8 195.2)" xlink:href="#eye"></use><use width="19.2" height="18.7" transform="matrix(-0.51, -0.85, 0.82, -0.5, 370.39, 192.59)" xlink:href="#eye"></use></g><g id="mouth"><path d="M399.2,186.3c.9,3.6,2.6,7.8,6,9,6.4,2.3,19-6,19-6s4.1,12.4,10,15,10.7-1.7,16-6" fill="#010101"></path><path fill="#fefefe" d="M450.2,198.3c.6,1.2.2,1.9-.2,2.2a36.7,36.7,0,0,1-7.6,4.9,14.9,14.9,0,0,1-4.8,1.4h-1.4l-1.3-.2-1.4-.4-1.3-.6a21.6,21.6,0,0,1-6.4-7.2,52.8,52.8,0,0,1-4-8.3l3.8,1.3a62.3,62.3,0,0,1-7.1,4.1,32.1,32.1,0,0,1-7.9,2.8,13.2,13.2,0,0,1-4.9.2l-1.4-.3a7.5,7.5,0,0,1-1.3-.6,7.9,7.9,0,0,1-2.3-1.6,16.8,16.8,0,0,1-2.9-4,24.1,24.1,0,0,1-1.6-4.2c-.1-.5,1.6-1.3,3-1.4s3.5.2,3.6.6a10.3,10.3,0,0,0,2.6,4.9l.7.5h2.4l1.5-.2a28.4,28.4,0,0,0,6.5-2c2.1-1,4.3-2.1,6.3-3.3h.1a2.5,2.5,0,0,1,3.4.9l.3.5a43.1,43.1,0,0,0,3.2,7.7,19.8,19.8,0,0,0,2.2,3.4,8.1,8.1,0,0,0,2.6,2.6,5,5,0,0,0,3,.7,10.8,10.8,0,0,0,3.7-1,33.4,33.4,0,0,0,7.2-4.3C448.8,197.4,449.5,197.2,450.2,198.3Z"></path></g></g></g><g id="table"><path d="M65.7,181.8l714,124c0,74-2,54-2,128l-673-161Z" fill="#010101"></path><path fill="#fefefe" d="M786.7,304.2c-2.7,1.2-10.8,0-16.1-.9L31.1,176.4c-5.2-.9-8.9-3.8-6.2-5s14.3-1.4,19.5-.5L777.1,300.6C782.3,301.6,789.4,303.1,786.7,304.2Z"></path></g><g id="laptop"><g id="laptop__base"><polygon points="641.9 304.1 454.7 348.2 103.8 271.3 254.6 230.3 641.9 304.1" fill="#f2f2f2"></polygon><path d="M641.9,304.1c1.5-.1-2.3,1.5-10.3,3.6-28.9,7.5-58.1,15.2-87.7,22.6s-59.1,14.5-88.4,21.3l-.8.2-.8-.2-349.5-78-1.1-.2-8.7-1.9,8.6-2.3,150.6-41.5.6-.2h.7c62.5,11.7,125.5,23.6,188.4,35.9s125.6,25.1,188,37.6c8,1.6,11.9,3,10.4,3a185.6,185.6,0,0,1-18.4-2.6c-61.9-11.2-123.6-22.2-185-33.5s-122.7-23.1-184.4-35h1.2L104.4,273.4h-.1v-4.3l351.2,75.7h-1.5c28.3-6.7,56.3-13.3,84.3-19.5s56.5-12,85.2-18.1C631.3,305.6,640.4,304.1,641.9,304.1Z" fill="#231f20"></path></g><g id="laptop__keyboard"><polygon points="371.1 274.8 256.8 253.5 257 252.7 266.2 251.1 382.4 271.5 382.3 272.3 371.1 274.8" fill="#3e3e54"></polygon><polygon points="237.4 265.6 221.3 262.4 221.4 261.7 230.2 260.2 246.8 262.6 246.6 263.4 237.4 265.6" fill="#3e3e54"></polygon><polygon points="474.6 312.9 249.9 268.1 250.1 267.3 259.2 265.8 487.7 309.6 487.5 310.5 474.6 312.9" fill="#3e3e54"></polygon><polygon points="411.8 309.4 204.2 266.7 204.4 266 212.9 264.5 423.9 306.3 423.7 307.2 411.8 309.4" fill="#3e3e54"></polygon><polygon points="450 317.3 428.5 312.9 428.8 312 440.7 310.6 462.7 314.1 462.5 315 450 317.3" fill="#3e3e54"></polygon><polygon points="201.6 273.9 187.5 270.9 187.7 270.2 196 268.7 210.4 271 210.3 271.7 201.6 273.9" fill="#3e3e54"></polygon><polygon points="222.6 278.3 208.1 275.3 208.3 274.5 216.9 273.1 231.8 275.4 231.6 276.2 222.6 278.3" fill="#3e3e54"></polygon><polygon points="362.9 308.1 231.5 280.2 231.7 279.5 240.7 278.1 374.2 305.1 374 305.9 362.9 308.1" fill="#3e3e54"></polygon><polygon points="444.3 288.4 385.2 277.4 385.4 276.5 396.6 274.9 456.9 285.1 456.7 285.9 444.3 288.4" fill="#3e3e54"></polygon><polygon points="526.1 303.6 460.1 291.3 460.3 290.4 472.8 288.9 540.1 300.2 539.9 301.1 526.1 303.6" fill="#3e3e54"></polygon><polygon points="426.2 321.6 376.1 310.9 376.3 310.1 387.4 308.7 438.5 318.5 438.3 319.4 426.2 321.6" fill="#3e3e54"></polygon><g><polygon points="410.6 286.5 399.1 288 398.9 288.8 499.9 308.3 513.3 305.9 513.5 305 410.6 286.5" fill="#3e3e54"></polygon><polygon points="395.7 283.7 395.9 282.8 248.2 255.7 239.2 257.3 239 258 384.3 286 395.7 283.7" fill="#3e3e54"></polygon></g><polygon points="371.3 273.9 256.9 252.7 266.4 250.3 382.4 271.5 371.3 273.9" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="237.6 264.9 221.4 261.7 230.4 259.4 246.8 262.6 237.6 264.9" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="474.8 312 250 267.3 259.4 265.1 487.7 309.6 474.8 312" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="412 308.5 204.4 266 213.1 263.8 423.9 306.3 412 308.5" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="450.2 316.4 428.8 312 440.9 309.7 462.8 314.1 450.2 316.4" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="201.7 273.1 187.7 270.2 196.2 268 210.4 271 201.7 273.1" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="222.8 277.6 208.3 274.5 217.1 272.4 231.8 275.4 222.8 277.6" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="363.1 307.3 231.7 279.5 240.9 277.3 374.2 305.1 363.1 307.3" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="444.6 287.5 385.4 276.5 396.8 274.1 456.9 285 444.6 287.5" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="526.3 302.7 460.3 290.4 473 288 540.1 300.2 526.3 302.7" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="426.4 320.7 376.3 310.1 387.6 307.9 438.5 318.5 426.4 320.7" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><g><polygon points="410.7 285.6 399.1 288 500.1 307.4 513.5 305 410.7 285.6" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon><polygon points="395.9 282.8 248.4 255 239.2 257.3 384.5 285.2 395.9 282.8" stroke="#FEFEFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"></polygon></g></g><g id="paw-right"><g id="paw-right--down"><path d="M293.2,191.3l10-7s-18.4,11.1-24,20-13,20.4-9,31c4.7,12.4,20.5,15.7,22,16,20,3.8,47.8-24.3,47.8-24.3s1.9-3.3,2.2-3.7" fill="#010101"></path><path fill="#fefefe" d="M342.1,223.4c.9,1.2.2,2.8-.3,3.7l-.4.7-.3.3a118.1,118.1,0,0,1-14.2,12.3,83.2,83.2,0,0,1-16.2,9.8,43.9,43.9,0,0,1-9.3,3,26.3,26.3,0,0,1-10.1.2,44.5,44.5,0,0,1-9.3-3.2,34.2,34.2,0,0,1-8.3-5.5,23,23,0,0,1-5.8-8.5,21.3,21.3,0,0,1-1.3-10.3,34.9,34.9,0,0,1,2.7-9.7,76.1,76.1,0,0,1,4.5-8.5l2.4-4,.6-1,.8-1.1a15.6,15.6,0,0,1,1.6-2,49.9,49.9,0,0,1,7-6.8,136.1,136.1,0,0,1,15.3-11.2,3.1,3.1,0,0,1,4.4,1,3,3,0,0,1-.8,4.2H305l-8.6,6.2c-.9.6-2.7-.5-3.1-1.9s.5-4.4,1.5-5l6.6-4.5,3.5,5.3A131.9,131.9,0,0,0,290,197.4a52.7,52.7,0,0,0-6.4,6,6.5,6.5,0,0,0-1.3,1.6l-.6.8-.7,1-2.4,3.8c-1.6,2.6-3.1,5.2-4.4,7.8a27.7,27.7,0,0,0-2.4,8.1,15.6,15.6,0,0,0,.8,8,17.4,17.4,0,0,0,4.4,6.7,27.2,27.2,0,0,0,7.1,4.9,39.5,39.5,0,0,0,8.1,3,21.6,21.6,0,0,0,8.4,0,37.8,37.8,0,0,0,8.5-2.6,84.9,84.9,0,0,0,15.7-9,142.4,142.4,0,0,0,14.1-11.6l-.3.3,1.1-1.8C340.3,223.4,341.3,222.2,342.1,223.4Z"></path></g><g id="paw-right--up"><g><path d="M282.2,215.2c-1.6-1.6-12.8-17.9-14-34.3-.1-2.5,1.7-16,12.9-22.4s22.3-1.9,26.2.4c12.2,7.3,21.2,19.1,22.8,22.4" fill="#010101"></path><path fill="#fefefe" d="M330,181.2a2.4,2.4,0,0,1-2.6-1.3,71.4,71.4,0,0,0-9.8-10.8,64,64,0,0,0-11.7-8.6,26.3,26.3,0,0,0-6.5-2.3,26.9,26.9,0,0,0-6.9-.6,24.9,24.9,0,0,0-6.7,1.3,20.8,20.8,0,0,0-5.8,3.3,23.1,23.1,0,0,0-7.6,11,32.5,32.5,0,0,0-1.4,6.6,6.6,6.6,0,0,0,.1,1.4l.2,1.8c.1,1.2.4,2.3.6,3.5a65,65,0,0,0,4.8,13.4c1,2.2,2.2,4.3,3.4,6.4a43.1,43.1,0,0,0,3.9,5.9.6.6,0,0,1,0,.6c0,.2-.2.4-.4.7a5.7,5.7,0,0,1-1.5,1.6c-1.3.6-4.1.1-4.6-.6a89.5,89.5,0,0,1-7.2-13.7,63.7,63.7,0,0,1-4.3-14.9,25.7,25.7,0,0,1-.5-4c0-.3-.1-.6-.1-1v-1.2a12.5,12.5,0,0,1,.2-2.1,35.2,35.2,0,0,1,2.4-7.8,28.6,28.6,0,0,1,4.1-6.9,24.6,24.6,0,0,1,6.1-5.5,26.2,26.2,0,0,1,15.5-4.2,28.9,28.9,0,0,1,7.8,1.2l3.8,1.3,1.8.9,1.8,1a78.2,78.2,0,0,1,11.9,9.6,80.2,80.2,0,0,1,9.7,11.8C331.1,179.7,331.4,181,330,181.2Z"></path></g><use width="31.4" height="33.93" transform="translate(273.2 166.1) rotate(-5.6)" xlink:href="#paw-pads"></use></g></g><g id="laptop__terminal"><path d="M316.9,238.7,153.5,205.2a5.1,5.1,0,0,1-4-3.5L109.8,75.4c-1-3.3,1.9-6.6,5.6-6.3L277.9,84.5a5.2,5.2,0,0,1,4.6,3.7l40.7,144.4C324.2,236.2,320.8,239.5,316.9,238.7Z"></path><path d="M317.3,238.7a7.9,7.9,0,0,0,2.2-.7,5,5,0,0,0,2.2-1.9,3.7,3.7,0,0,0,.6-2.9l-.3-.8-.2-.9a15.4,15.4,0,0,1-.5-1.7L300,154.6l-10.7-37.5L284,98.3l-2.6-9.4a7.9,7.9,0,0,0-.4-.9,4.3,4.3,0,0,0-.4-.7,3.3,3.3,0,0,0-1.5-1.1l-.9-.3h-1.1l-2.4-.2L119.2,71.2l-2.4-.3h-2.2a3.3,3.3,0,0,0-2.8,1.6,2.4,2.4,0,0,0-.5,1.4v.8c.1.1.1.2.1.4l.2.6,1.5,4.6L119,98.8l11.8,37.3,11.7,37.2,5.9,18.6,2.9,9.3a3.4,3.4,0,0,0,2.2,2h1l1.2.3,2.4.4,153,31.1c4.3.9,7.4,2.9,5.2,3.3s-11.7-.1-16-1l-75.8-15.7L186.6,214l-19-3.9-9.5-2-4.7-1h-.7l-.8-.3a6.1,6.1,0,0,1-1.4-.7,7.6,7.6,0,0,1-2.3-2.4l-.4-.8a1.9,1.9,0,0,1-.2-.7l-.4-1.2-.7-2.3-1.4-4.6-2.9-9.2-5.8-18.5-11.5-36.9-11.5-37-2.9-9.2L109,78.5l-.7-2.3v-.6c0-.3-.1-.6-.1-.8a4.8,4.8,0,0,1,0-1.7,6.8,6.8,0,0,1,3.8-5,10.1,10.1,0,0,1,3-.7h2.6l9.6,1L204.1,76l38.5,3.7,19.3,1.9,9.6.9,4.8.5h2.6a6.6,6.6,0,0,1,2.7,1.2,7.2,7.2,0,0,1,1.9,2.4,12.1,12.1,0,0,1,.5,1.4l.3,1.1,1.3,4.7,2.6,9.3,5.2,18.6,10.4,37.3,10.4,37.3,5.3,18.6,2.6,9.4,1.3,4.6.6,2.4a7,7,0,0,1,.4,2.7,5.7,5.7,0,0,1-1.8,3.7,5.9,5.9,0,0,1-3.4,1.6,3.5,3.5,0,0,1-2.1-.4C316.7,239,316.8,238.9,317.3,238.7Z"></path></g><g id="laptop__terminal_code_scene"> <g id="laptop__code"><g stroke="#3DE0E8" stroke-width="6" transform="matrix(-1 0 0 1 278 103)"><g id="f3" transform="translate(0 76)"><path class="typing-animation" id="f3-l9" d="M8,25L8,25" stroke-dasharray="60,10"></path><path class="typing-animation" id="f3-l8" d="M8,13L8,13" stroke-dasharray="50,10"></path><path class="typing-animation" id="f3-l7" d="M0,1L0,1" stroke-dasharray="25,10"></path></g><g id="f2" transform="translate(0 38)"><path class="typing-animation" id="f2-l6" d="M8,25L8,25" stroke-dasharray="40,10"></path><path class="typing-animation" id="f2-l5" d="M8,13L8,13" stroke-dasharray="60,10"></path><path class="typing-animation" id="f2-l4" d="M0,1L0,1" stroke-dasharray="30,10"></path></g><g id="f1"><path class="typing-animation" id="f1-l3" d="M8,25L8,25" stroke-dasharray="60,10"></path><path class="typing-animation" id="f1-l2" d="M8,13L8,13" stroke-dasharray="60,10"></path><path class="typing-animation" id="f1-l1" d="M0,1L0,1" stroke-dasharray="60,10"></path></g></g></g></g><g id="laptop__cover" style="mix-blend-mode: hard-light;"><polygon points="440.7 347.2 90.3 275.6 4.7 3.8 353 36.7 440.7 347.2" fill="#f2f2f2"></polygon><path d="M440.4,346.4c-2.5-5.3-6.5-18.8-9-27.4L390.7,178c-13.6-46.8-26.9-93.7-40.3-140.6l2.3,2L4.4,7.1,7.9,2.8,94,274.5l-2.9-2.6q83.7,16.8,166.8,34.2t166.8,35.4c8.8,1.9,17.5,5.1,14.7,5.5s-6.3-.2-12-.9-12.3-1.5-16.8-2.3Q330.5,328.1,250,312.1c-53.5-10.8-107.1-21.7-160.4-32.7l-2.3-.5-.6-2.1L1.5,4.8,0,0,5,.5,353.3,34l1.8.2.5,1.8q20.7,73.8,41.2,147.8l40.6,147.5C439.8,340.1,442.9,351.7,440.4,346.4Z"></path></g></g><g id="paw-left"><g id="paw-left--up"><g><path d="M545.4,261.9c-7.1-13-12.9-31.1-13.3-37.6-.6-9,0-15.6,5.2-22.2s15-9.8,22.7-8.8a26.7,26.7,0,0,1,17.3,9.4c5.3,5.8,9.4,12.9,11.6,16.6" fill="#010101"></path><path fill="#fefefe" d="M588.9,219.2c-1.4.4-2.3-.7-2.8-1.4a93.9,93.9,0,0,0-8.9-12.5c-3.3-3.9-7.1-7-11.7-8.6a24.2,24.2,0,0,0-7.1-1.4,24.5,24.5,0,0,0-7.1.7,27,27,0,0,0-6.6,2.7,21,21,0,0,0-5.2,4.6,20.6,20.6,0,0,0-3.5,6.1,22.2,22.2,0,0,0-1.3,6.9,47.3,47.3,0,0,0,.1,7.5,52.2,52.2,0,0,0,1.4,7.1c1.4,4.8,3.1,9.7,5,14.4a147.7,147.7,0,0,0,6.5,13.9c.4.7-1,2.3-2.4,2.6s-4-.6-4.4-1.4c-2.3-4.8-4.3-9.7-6.1-14.6a128.8,128.8,0,0,1-4.6-15.3c-.3-1.3-.5-2.6-.7-4a16.4,16.4,0,0,1-.2-2.2v-2a57,57,0,0,1,.4-8.2,27.2,27.2,0,0,1,2.3-8.2c.7-1.3,1.4-2.5,2.2-3.7l1.3-1.7,1.4-1.6a28.8,28.8,0,0,1,7-5,27.6,27.6,0,0,1,8-2.5,25.6,25.6,0,0,1,8.3-.2,27.4,27.4,0,0,1,15.1,6.7,50.6,50.6,0,0,1,5.5,5.9,111.3,111.3,0,0,1,8.7,13.2C589.8,217.7,590.3,218.9,588.9,219.2Z"></path></g><use width="31.4" height="33.93" transform="matrix(0.99, -0.03, 0.04, 1, 539.85, 203.52)" xlink:href="#paw-pads"></use></g><g id="paw-left--down"><path d="M538.2,239.3c-3.2,1.6-33,10.8-37,28-.4,1.8-2.1,18.9,7,26,5.5,4.3,12.7,2.8,25,0,10.3-2.3,19-5.8,40-16,9.1-4.4,16.6-8.2,22-11" fill="#010101"></path><path fill="#fefefe" d="M595.1,266.4c.1,1.4-1.4,2.4-2.4,2.9l-18.3,9.4c-6.2,3.1-12.3,6.1-18.6,9a120.8,120.8,0,0,1-19.6,7.2l-5.1,1.2-5.1,1.1a43.4,43.4,0,0,1-5.2.9,33.8,33.8,0,0,1-5.6.3,17.8,17.8,0,0,1-5.8-1.5,6.1,6.1,0,0,1-1.4-.7l-1.3-.9-2.2-2a23.6,23.6,0,0,1-5.2-10.2,44.5,44.5,0,0,1-1.3-10.9c0-.9.1-1.8.1-2.7a6.6,6.6,0,0,0,.1-1.4v-.7c.1-.3.1-.7.2-.9a21.6,21.6,0,0,1,2.1-5.5,33.4,33.4,0,0,1,7.1-8.7,67.1,67.1,0,0,1,8.7-6.4,121.7,121.7,0,0,1,19-9,1.5,1.5,0,0,1,1.7.6,3.4,3.4,0,0,1,.9,1.9c.1,1.5-1.6,4.2-2.6,4.6a91.1,91.1,0,0,0-17.8,8.5,40.1,40.1,0,0,0-7.6,5.8,22.8,22.8,0,0,0-5.2,7.3l-.4,1-.3,1a1.7,1.7,0,0,0-.2.5v.4c-.1.4-.1.8-.2,1.2s-.1,3.1-.1,4.7a35.4,35.4,0,0,0,1.4,9.3,15.6,15.6,0,0,0,4.5,7.3c2,1.9,4.7,2.6,7.8,2.5a55.9,55.9,0,0,0,9.7-1.2l4.9-1.1,4.9-1.1a121,121,0,0,0,18.8-6.8c12.4-5.3,24.6-11.5,36.8-17.4C593.4,265.4,595,264.9,595.1,266.4Z"></path></g></g></svg>
    </div>
    <div class="user_div" v-if="$store.state.userName">
      <div @click="doLgout" class="user_div_userName">
        {{$store.state.userName}}
      </div>
    </div>
    <img v-if="$store.state.userName" class="user_icon" src="data:image/jpeg;base64,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" />
    <!-- <div class="tree" v-if="$store.state.userName">
        <ul>
          <tree :treeData ="tree"></tree>
        </ul>
        <div style="font-size:20px;color:#FFFFFF">
        <input type="radio" id="histogram" value="histogram" v-model="$store.state.veType">
        <label for="histogram">長條圖</label>
        <input type="radio" id="pie" value="pie" v-model="$store.state.veType">
        <label for="pie">圓餅圖</label>
        <input type="radio" id="line" value="line" v-model="$store.state.veType">
        <label for="line">折線圖</label>
        </div>
    </div> -->
    <span class='chartSeat'>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
<div v-if="$store.state.userName" class="snow"></div>
      <router-view></router-view>
    </span>
  </div>
</template>
<style>

</style>

<script>
import helloWorld from  "../src/components/HelloWorld"
import root from  "../src/components/root"
import tree from  "../src/components/tree"
export default {
  name: 'App',
    created () {
      //在頁面載入的時候讀取sessionStorage丟回去
      if (sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      } 

      //刷新前觸發的 將資料存到sessionStorage 資料裡
      window.addEventListener("beforeunload",()=>{
          sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    },
  components: { helloWorld ,root ,tree},
  data () {
    return {
      tree: {
       name: "目錄",
       Lv:'1',
       node: [
         {
           name: "基本圖表",
           Lv:'1',
           node: [
             {
               name: "Regular exercise rate of population over 65",
               Lv:'1',
             },
             {
               name: "The prevalence of diabetes among people over 20 years old",
               Lv:'2',
             },
           ],
         },
         {
           name: "進階圖表",
           Lv:'2',
           node: [
             {
               name: "Overweight and obesity rates over 18 years old over the years",
               Lv:'2',
             },
             {
               name: "exchange rate",
               Lv:'3',
             },
           ],
         },
         {
           name: "最高權限圖表",
           Lv:'99999999999999999999',
           node: [
             {
               name: "User permissions",
               Lv:'999999999999999999',
             },
           ],
         },
       ],
     },
    }
  },
  methods:{
    doLgout(){
      this.$store.state.userName = "";
      this.$router.push({ name: 'loginUI' })
    }
  }
}
</script>

<style>
@property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
}

:root {
  --card-height: 65vh;
  --card-width: calc(var(--card-height) / 1.5);
}


body {
  min-height: 100vh;
  background: #212534;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}


.card {
  font-size:30px;
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 1.5em;
  color: rgb(88 199 250 / 0%);
  cursor: pointer;
  font-family: cursive;
  z-index: 9999;
}

.card:hover {
  color: rgb(88 199 250 / 100%);
  transition: color 1s;
}
.card:hover:before, .card:hover:after {
  animation: none;
  opacity: 0;
}


.card::before {
  content: "";
  width: 104%;
  height: 102%;
  border-radius: 8px;
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

.card::after {
  position: absolute;
  content: "";
  top: calc(var(--card-height) / 6);
  left: 0;
  right: 0;
  z-index: -1;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  transform: scale(0.8);
  filter: blur(calc(var(--card-height) / 6));
  background-image: linear-gradient(
    var(--rotate)
    , #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
  transition: opacity .5s;
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}

a {
  color: #212534;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin-top: 2rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
  margin: 0px 0px 0px 5px;
  list-style: none;
  line-height: 2em;
  font-family: Arial;
}

ul li {
  font-size: 16px;
  position: relative;
}

ul li:before {
  position: absolute;
  left: -15px;
  top: 0px;
  content: '';
  display: block;
  border-left: 1px solid #ddd;
  height: 1em;
  border-bottom: 1px solid #ddd;
  width: 10px;
}

ul li:after {
  position: absolute;
  left: -15px;
  bottom: -7px;
  content: '';
  display: block;
  border-left: 1px solid #ddd;
  height: 100%;
}

ul li.root {
  margin: 0px 0px 0px -5px;
}

ul li.root:before {
  display: none;
}

ul li.root:after {
  display: none;
}

ul li:last-child:after {
  display: none;
}
.UI{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #000000;
    z-index: 100;
}

.chartSeat{
  background-color: #ff0000;
}

.user_icon{
    position: absolute;
    font-weight: bold;
    top: 0px;
    right : 150px; 
    color: white;
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius:60px;
}
  
.user_div{
    position: absolute;
    font-weight: bold;
    top: 0px;
    right : 0px; 
    color: rgb(0, 4, 255);
    width: 200px;
    height: 60px;
    background-color: #000;
    text-align: right;
    border-radius:60px;
    font-size:30px;
}
.user_div_userName{
  position: absolute;
  top: 12px;
  right: 60px;
}
.content {
  background-color: #000;
  position: absolute;
  width: 100%;
}

.container {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#bongo-cat {
  position: absolute;
  height: 80vh;
  width: 80vw;
  top: 100vh;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.typing-animation {
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 1200ms;
}

path#f1-l1 {
  animation-name: typing-f1-l1;
}

path#f1-l2 {
  animation-name: typing-f1-l2;
}

path#f1-l3 {
  animation-name: typing-f1-l3;
}

path#f2-l4 {
  animation-name: typing-f2-l4;
}

path#f2-l5 {
  animation-name: typing-f2-l5;
}

path#f2-l6 {
  animation-name: typing-f2-l6;
}

path#f3-l7 {
  animation-name: typing-f3-l7;
}

path#f3-l8 {
  animation-name: typing-f3-l8;
}

path#f3-l9 {
  animation-name: typing-f3-l9;
}

@keyframes typing-f3-l9 {
  0% {
    d: path("M8,25L8,25");
  }
  82% {
    d: path("M8,25L8,25");
  }
  92% {
    d: path("M8,25L96,25");
  }
  100% {
    d: path("M8,25L96,25");
  }
}

@keyframes typing-f3-l8 {
  0% {
    d: path("M8,13L8,13");
  }
  68% {
    d: path("M8,13L8,13");
  }
  82% {
    d: path("M8,13L146,13");
  }
  100% {
    d: path("M8,13L146,13");
  }
}

@keyframes typing-f3-l7 {
  0% {
    d: path("M0,1L0,1");
  }
  60% {
    d: path("M0,1L0,1");
  }
  68% {
    d: path("M0,1L96,1");
  }
  100% {
    d: path("M0,1L96,1");
  }
}

@keyframes typing-f2-l6 {
  0% {
    d: path("M8,25L8,25");
  }
  54% {
    d: path("M8,25L8,25");
  }
  60% {
    d: path("M8,25L69,25");
  }
  100% {
    d: path("M8,25L69,25");
  }
}

@keyframes typing-f2-l5 {
  0% {
    d: path("M8,13L8,13");
  }
  44% {
    d: path("M8,13L8,13");
  }
  54% {
    d: path("M8,13L114,13");
  }
  100% {
    d: path("M8,13L114,13");
  }
}

@keyframes typing-f2-l4 {
  0% {
    d: path("M0,1L0,1");
  }
  30% {
    d: path("M0,1L0,1");
  }
  44% {
    d: path("M0,1L136,1");
  }
  100% {
    d: path("M0,1L136,1");
  }
}

@keyframes typing-f1-l3 {
  0% {
    d: path("M8,25L8,25");
  }
  24% {
    d: path("M8,25L8,25");
  }
  30% {
    d: path("M8,25L61,25");
  }
  100% {
    d: path("M8,25L61,25");
  }
}

@keyframes typing-f1-l2 {
  0% {
    d: path("M8,13L8,13");
  }
  14% {
    d: path("M8,13L8,13");
  }
  24% {
    d: path("M8,13L124,13");
  }
  100% {
    d: path("M8,13L124,13");
  }
}

@keyframes typing-f1-l1 {
  0% {
    d: path("M0,1L0,1");
  }
  14% {
    d: path("M0,1L160,1");
  }
  100% {
    d: path("M0,1L160,1");
  }
}

#paw-right--up,
#paw-right--down,
#paw-left--up,
#paw-left--down {
  animation: blink 300ms infinite;
}

#paw-right--up,
#paw-left--down {
  animation-delay: 150ms;
}

@keyframes blink {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

#laptop__code {
  transform: rotateX(-37deg) rotateY(-46deg) rotateZ(-23deg) translateX(8px) translateY(20px) translateZ(-50px);
}
body {
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
  filter: drop-shadow(0 0 10px white);
}

.snow {
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;
}
.snow:nth-child(1) {
  opacity: 0.6387;
  transform: translate(22.6589vw, -10px) scale(0.6456);
  animation: fall-1 28s -16s linear infinite;
}
@keyframes fall-1 {
  64.507% {
    transform: translate(30.9533vw, 64.507vh) scale(0.6456);
  }
  to {
    transform: translate(26.8061vw, 100vh) scale(0.6456);
  }
}
.snow:nth-child(2) {
  opacity: 0.6409;
  transform: translate(3.7434vw, -10px) scale(0.6839);
  animation: fall-2 21s -8s linear infinite;
}
@keyframes fall-2 {
  70.953% {
    transform: translate(7.865vw, 70.953vh) scale(0.6839);
  }
  to {
    transform: translate(5.8042vw, 100vh) scale(0.6839);
  }
}
.snow:nth-child(3) {
  opacity: 0.0481;
  transform: translate(90.6812vw, -10px) scale(0.1213);
  animation: fall-3 22s -16s linear infinite;
}
@keyframes fall-3 {
  77.135% {
    transform: translate(91.5973vw, 77.135vh) scale(0.1213);
  }
  to {
    transform: translate(91.13925vw, 100vh) scale(0.1213);
  }
}
.snow:nth-child(4) {
  opacity: 0.7455;
  transform: translate(7.8497vw, -10px) scale(0.8448);
  animation: fall-4 10s -7s linear infinite;
}
@keyframes fall-4 {
  66.985% {
    transform: translate(12.7419vw, 66.985vh) scale(0.8448);
  }
  to {
    transform: translate(10.2958vw, 100vh) scale(0.8448);
  }
}
.snow:nth-child(5) {
  opacity: 0.6577;
  transform: translate(71.0238vw, -10px) scale(0.1252);
  animation: fall-5 28s -21s linear infinite;
}
@keyframes fall-5 {
  44.669% {
    transform: translate(76.6913vw, 44.669vh) scale(0.1252);
  }
  to {
    transform: translate(73.85755vw, 100vh) scale(0.1252);
  }
}
.snow:nth-child(6) {
  opacity: 0.3856;
  transform: translate(87.4326vw, -10px) scale(0.4902);
  animation: fall-6 11s -11s linear infinite;
}
@keyframes fall-6 {
  42.884% {
    transform: translate(96.9818vw, 42.884vh) scale(0.4902);
  }
  to {
    transform: translate(92.2072vw, 100vh) scale(0.4902);
  }
}
.snow:nth-child(7) {
  opacity: 0.5004;
  transform: translate(52.529vw, -10px) scale(0.1489);
  animation: fall-7 13s -7s linear infinite;
}
@keyframes fall-7 {
  46.327% {
    transform: translate(50.9409vw, 46.327vh) scale(0.1489);
  }
  to {
    transform: translate(51.73495vw, 100vh) scale(0.1489);
  }
}
.snow:nth-child(8) {
  opacity: 0.2538;
  transform: translate(32.377vw, -10px) scale(0.2901);
  animation: fall-8 23s -23s linear infinite;
}
@keyframes fall-8 {
  41.325% {
    transform: translate(26.1769vw, 41.325vh) scale(0.2901);
  }
  to {
    transform: translate(29.27695vw, 100vh) scale(0.2901);
  }
}
.snow:nth-child(9) {
  opacity: 0.9823;
  transform: translate(39.3873vw, -10px) scale(0.676);
  animation: fall-9 24s -17s linear infinite;
}
@keyframes fall-9 {
  51.624% {
    transform: translate(32.21vw, 51.624vh) scale(0.676);
  }
  to {
    transform: translate(35.79865vw, 100vh) scale(0.676);
  }
}
.snow:nth-child(10) {
  opacity: 0.5586;
  transform: translate(74.0116vw, -10px) scale(0.4111);
  animation: fall-10 18s -28s linear infinite;
}
@keyframes fall-10 {
  71.501% {
    transform: translate(75.6032vw, 71.501vh) scale(0.4111);
  }
  to {
    transform: translate(74.8074vw, 100vh) scale(0.4111);
  }
}
.snow:nth-child(11) {
  opacity: 0.0809;
  transform: translate(52.8645vw, -10px) scale(0.2984);
  animation: fall-11 27s -16s linear infinite;
}
@keyframes fall-11 {
  77.255% {
    transform: translate(53.5247vw, 77.255vh) scale(0.2984);
  }
  to {
    transform: translate(53.1946vw, 100vh) scale(0.2984);
  }
}
.snow:nth-child(12) {
  opacity: 0.3297;
  transform: translate(8.7301vw, -10px) scale(0.374);
  animation: fall-12 16s -13s linear infinite;
}
@keyframes fall-12 {
  47.452% {
    transform: translate(4.5416vw, 47.452vh) scale(0.374);
  }
  to {
    transform: translate(6.63585vw, 100vh) scale(0.374);
  }
}
.snow:nth-child(13) {
  opacity: 0.7984;
  transform: translate(25.626vw, -10px) scale(0.2438);
  animation: fall-13 16s -19s linear infinite;
}
@keyframes fall-13 {
  38.168% {
    transform: translate(16.2894vw, 38.168vh) scale(0.2438);
  }
  to {
    transform: translate(20.9577vw, 100vh) scale(0.2438);
  }
}
.snow:nth-child(14) {
  opacity: 0.5798;
  transform: translate(76.169vw, -10px) scale(0.7762);
  animation: fall-14 19s -24s linear infinite;
}
@keyframes fall-14 {
  50.555% {
    transform: translate(69.4755vw, 50.555vh) scale(0.7762);
  }
  to {
    transform: translate(72.82225vw, 100vh) scale(0.7762);
  }
}
.snow:nth-child(15) {
  opacity: 0.5709;
  transform: translate(83.2933vw, -10px) scale(0.9677);
  animation: fall-15 24s -3s linear infinite;
}
@keyframes fall-15 {
  57.474% {
    transform: translate(82.1412vw, 57.474vh) scale(0.9677);
  }
  to {
    transform: translate(82.71725vw, 100vh) scale(0.9677);
  }
}
.snow:nth-child(16) {
  opacity: 0.2486;
  transform: translate(14.8129vw, -10px) scale(0.7261);
  animation: fall-16 19s -13s linear infinite;
}
@keyframes fall-16 {
  63.313% {
    transform: translate(7.0637vw, 63.313vh) scale(0.7261);
  }
  to {
    transform: translate(10.9383vw, 100vh) scale(0.7261);
  }
}
.snow:nth-child(17) {
  opacity: 0.6648;
  transform: translate(75.6556vw, -10px) scale(0.9924);
  animation: fall-17 23s -6s linear infinite;
}
@keyframes fall-17 {
  69.224% {
    transform: translate(67.4713vw, 69.224vh) scale(0.9924);
  }
  to {
    transform: translate(71.56345vw, 100vh) scale(0.9924);
  }
}
.snow:nth-child(18) {
  opacity: 0.6732;
  transform: translate(34.4865vw, -10px) scale(0.3507);
  animation: fall-18 18s -11s linear infinite;
}
@keyframes fall-18 {
  63.362% {
    transform: translate(39.4199vw, 63.362vh) scale(0.3507);
  }
  to {
    transform: translate(36.9532vw, 100vh) scale(0.3507);
  }
}
.snow:nth-child(19) {
  opacity: 0.0174;
  transform: translate(57.9385vw, -10px) scale(0.4951);
  animation: fall-19 28s -23s linear infinite;
}
@keyframes fall-19 {
  32.281% {
    transform: translate(48.3847vw, 32.281vh) scale(0.4951);
  }
  to {
    transform: translate(53.1616vw, 100vh) scale(0.4951);
  }
}
.snow:nth-child(20) {
  opacity: 0.0352;
  transform: translate(7.6828vw, -10px) scale(0.9688);
  animation: fall-20 14s -14s linear infinite;
}
@keyframes fall-20 {
  44.572% {
    transform: translate(3.0943vw, 44.572vh) scale(0.9688);
  }
  to {
    transform: translate(5.38855vw, 100vh) scale(0.9688);
  }
}
.snow:nth-child(21) {
  opacity: 0.1189;
  transform: translate(70.0192vw, -10px) scale(0.029);
  animation: fall-21 23s -6s linear infinite;
}
@keyframes fall-21 {
  37.04% {
    transform: translate(77.7998vw, 37.04vh) scale(0.029);
  }
  to {
    transform: translate(73.9095vw, 100vh) scale(0.029);
  }
}
.snow:nth-child(22) {
  opacity: 0.3625;
  transform: translate(37.8877vw, -10px) scale(0.3054);
  animation: fall-22 14s -18s linear infinite;
}
@keyframes fall-22 {
  40.635% {
    transform: translate(44.865vw, 40.635vh) scale(0.3054);
  }
  to {
    transform: translate(41.37635vw, 100vh) scale(0.3054);
  }
}
.snow:nth-child(23) {
  opacity: 0.5636;
  transform: translate(43.2223vw, -10px) scale(0.6096);
  animation: fall-23 21s -15s linear infinite;
}
@keyframes fall-23 {
  31.047% {
    transform: translate(45.2778vw, 31.047vh) scale(0.6096);
  }
  to {
    transform: translate(44.25005vw, 100vh) scale(0.6096);
  }
}
.snow:nth-child(24) {
  opacity: 0.6664;
  transform: translate(41.5007vw, -10px) scale(0.4834);
  animation: fall-24 25s -4s linear infinite;
}
@keyframes fall-24 {
  34.046% {
    transform: translate(48.0256vw, 34.046vh) scale(0.4834);
  }
  to {
    transform: translate(44.76315vw, 100vh) scale(0.4834);
  }
}
.snow:nth-child(25) {
  opacity: 0.6168;
  transform: translate(9.2569vw, -10px) scale(0.3484);
  animation: fall-25 28s -26s linear infinite;
}
@keyframes fall-25 {
  38.811% {
    transform: translate(6.5336vw, 38.811vh) scale(0.3484);
  }
  to {
    transform: translate(7.89525vw, 100vh) scale(0.3484);
  }
}
.snow:nth-child(26) {
  opacity: 0.4369;
  transform: translate(19.633vw, -10px) scale(0.5557);
  animation: fall-26 25s -25s linear infinite;
}
@keyframes fall-26 {
  52.386% {
    transform: translate(12.0966vw, 52.386vh) scale(0.5557);
  }
  to {
    transform: translate(15.8648vw, 100vh) scale(0.5557);
  }
}
.snow:nth-child(27) {
  opacity: 0.6353;
  transform: translate(88.4318vw, -10px) scale(0.7176);
  animation: fall-27 26s -17s linear infinite;
}
@keyframes fall-27 {
  30.989% {
    transform: translate(81.6825vw, 30.989vh) scale(0.7176);
  }
  to {
    transform: translate(85.05715vw, 100vh) scale(0.7176);
  }
}
.snow:nth-child(28) {
  opacity: 0.1371;
  transform: translate(27.3995vw, -10px) scale(0.7113);
  animation: fall-28 12s -26s linear infinite;
}
@keyframes fall-28 {
  62.364% {
    transform: translate(19.161vw, 62.364vh) scale(0.7113);
  }
  to {
    transform: translate(23.28025vw, 100vh) scale(0.7113);
  }
}
.snow:nth-child(29) {
  opacity: 0.4159;
  transform: translate(63.4673vw, -10px) scale(0.5658);
  animation: fall-29 26s -10s linear infinite;
}
@keyframes fall-29 {
  55.096% {
    transform: translate(67.5422vw, 55.096vh) scale(0.5658);
  }
  to {
    transform: translate(65.50475vw, 100vh) scale(0.5658);
  }
}
.snow:nth-child(30) {
  opacity: 0.3095;
  transform: translate(21.049vw, -10px) scale(0.535);
  animation: fall-30 15s -30s linear infinite;
}
@keyframes fall-30 {
  57.121% {
    transform: translate(29.0983vw, 57.121vh) scale(0.535);
  }
  to {
    transform: translate(25.07365vw, 100vh) scale(0.535);
  }
}
.snow:nth-child(31) {
  opacity: 0.7599;
  transform: translate(4.3687vw, -10px) scale(0.3106);
  animation: fall-31 29s -12s linear infinite;
}
@keyframes fall-31 {
  68.902% {
    transform: translate(9.865vw, 68.902vh) scale(0.3106);
  }
  to {
    transform: translate(7.11685vw, 100vh) scale(0.3106);
  }
}
.snow:nth-child(32) {
  opacity: 0.8086;
  transform: translate(33.9839vw, -10px) scale(0.6456);
  animation: fall-32 28s -17s linear infinite;
}
@keyframes fall-32 {
  40.109% {
    transform: translate(32.5122vw, 40.109vh) scale(0.6456);
  }
  to {
    transform: translate(33.24805vw, 100vh) scale(0.6456);
  }
}
.snow:nth-child(33) {
  opacity: 0.3855;
  transform: translate(10.9526vw, -10px) scale(0.4792);
  animation: fall-33 21s -5s linear infinite;
}
@keyframes fall-33 {
  49.74% {
    transform: translate(17.1594vw, 49.74vh) scale(0.4792);
  }
  to {
    transform: translate(14.056vw, 100vh) scale(0.4792);
  }
}
.snow:nth-child(34) {
  opacity: 0.7232;
  transform: translate(61.512vw, -10px) scale(0.6628);
  animation: fall-34 12s -16s linear infinite;
}
@keyframes fall-34 {
  48.784% {
    transform: translate(59.5127vw, 48.784vh) scale(0.6628);
  }
  to {
    transform: translate(60.51235vw, 100vh) scale(0.6628);
  }
}
.snow:nth-child(35) {
  opacity: 0.6036;
  transform: translate(45.0459vw, -10px) scale(0.365);
  animation: fall-35 26s -4s linear infinite;
}
@keyframes fall-35 {
  62.706% {
    transform: translate(53.2394vw, 62.706vh) scale(0.365);
  }
  to {
    transform: translate(49.14265vw, 100vh) scale(0.365);
  }
}
.snow:nth-child(36) {
  opacity: 0.0705;
  transform: translate(29.3183vw, -10px) scale(0.8703);
  animation: fall-36 17s -13s linear infinite;
}
@keyframes fall-36 {
  33.719% {
    transform: translate(36.5953vw, 33.719vh) scale(0.8703);
  }
  to {
    transform: translate(32.9568vw, 100vh) scale(0.8703);
  }
}
.snow:nth-child(37) {
  opacity: 0.1456;
  transform: translate(45.7462vw, -10px) scale(0.6148);
  animation: fall-37 26s -26s linear infinite;
}
@keyframes fall-37 {
  41.515% {
    transform: translate(50.1215vw, 41.515vh) scale(0.6148);
  }
  to {
    transform: translate(47.93385vw, 100vh) scale(0.6148);
  }
}
.snow:nth-child(38) {
  opacity: 0.2126;
  transform: translate(20.6855vw, -10px) scale(0.6043);
  animation: fall-38 28s -16s linear infinite;
}
@keyframes fall-38 {
  41.017% {
    transform: translate(26.5875vw, 41.017vh) scale(0.6043);
  }
  to {
    transform: translate(23.6365vw, 100vh) scale(0.6043);
  }
}
.snow:nth-child(39) {
  opacity: 0.0568;
  transform: translate(51.7083vw, -10px) scale(0.0113);
  animation: fall-39 28s -23s linear infinite;
}
@keyframes fall-39 {
  57.249% {
    transform: translate(47.7639vw, 57.249vh) scale(0.0113);
  }
  to {
    transform: translate(49.7361vw, 100vh) scale(0.0113);
  }
}
.snow:nth-child(40) {
  opacity: 0.2021;
  transform: translate(40.5967vw, -10px) scale(0.9556);
  animation: fall-40 29s -12s linear infinite;
}
@keyframes fall-40 {
  56.758% {
    transform: translate(45.6756vw, 56.758vh) scale(0.9556);
  }
  to {
    transform: translate(43.13615vw, 100vh) scale(0.9556);
  }
}
.snow:nth-child(41) {
  opacity: 0.9319;
  transform: translate(34.1739vw, -10px) scale(0.5723);
  animation: fall-41 18s -18s linear infinite;
}
@keyframes fall-41 {
  62.919% {
    transform: translate(38.6851vw, 62.919vh) scale(0.5723);
  }
  to {
    transform: translate(36.4295vw, 100vh) scale(0.5723);
  }
}
.snow:nth-child(42) {
  opacity: 0.2383;
  transform: translate(92.7158vw, -10px) scale(0.2096);
  animation: fall-42 27s -16s linear infinite;
}
@keyframes fall-42 {
  31.111% {
    transform: translate(84.9195vw, 31.111vh) scale(0.2096);
  }
  to {
    transform: translate(88.81765vw, 100vh) scale(0.2096);
  }
}
.snow:nth-child(43) {
  opacity: 0.2337;
  transform: translate(0.5035vw, -10px) scale(0.4977);
  animation: fall-43 25s -20s linear infinite;
}
@keyframes fall-43 {
  70.431% {
    transform: translate(-8.328vw, 70.431vh) scale(0.4977);
  }
  to {
    transform: translate(-3.91225vw, 100vh) scale(0.4977);
  }
}
.snow:nth-child(44) {
  opacity: 0.7542;
  transform: translate(91.5997vw, -10px) scale(0.3509);
  animation: fall-44 14s -25s linear infinite;
}
@keyframes fall-44 {
  71.456% {
    transform: translate(95.606vw, 71.456vh) scale(0.3509);
  }
  to {
    transform: translate(93.60285vw, 100vh) scale(0.3509);
  }
}
.snow:nth-child(45) {
  opacity: 0.5235;
  transform: translate(29.3263vw, -10px) scale(0.5483);
  animation: fall-45 13s -26s linear infinite;
}
@keyframes fall-45 {
  75.672% {
    transform: translate(22.5086vw, 75.672vh) scale(0.5483);
  }
  to {
    transform: translate(25.91745vw, 100vh) scale(0.5483);
  }
}
.snow:nth-child(46) {
  opacity: 0.1894;
  transform: translate(14.419vw, -10px) scale(0.9422);
  animation: fall-46 28s -11s linear infinite;
}
@keyframes fall-46 {
  45.709% {
    transform: translate(16.4719vw, 45.709vh) scale(0.9422);
  }
  to {
    transform: translate(15.44545vw, 100vh) scale(0.9422);
  }
}
.snow:nth-child(47) {
  opacity: 0.531;
  transform: translate(94.6969vw, -10px) scale(0.9289);
  animation: fall-47 29s -5s linear infinite;
}
@keyframes fall-47 {
  75.771% {
    transform: translate(100.7408vw, 75.771vh) scale(0.9289);
  }
  to {
    transform: translate(97.71885vw, 100vh) scale(0.9289);
  }
}
.snow:nth-child(48) {
  opacity: 0.8798;
  transform: translate(82.896vw, -10px) scale(0.4991);
  animation: fall-48 29s -19s linear infinite;
}
@keyframes fall-48 {
  50.139% {
    transform: translate(82.5159vw, 50.139vh) scale(0.4991);
  }
  to {
    transform: translate(82.70595vw, 100vh) scale(0.4991);
  }
}
.snow:nth-child(49) {
  opacity: 0.1391;
  transform: translate(90.734vw, -10px) scale(0.1845);
  animation: fall-49 16s -16s linear infinite;
}
@keyframes fall-49 {
  60.695% {
    transform: translate(82.9417vw, 60.695vh) scale(0.1845);
  }
  to {
    transform: translate(86.83785vw, 100vh) scale(0.1845);
  }
}
.snow:nth-child(50) {
  opacity: 0.6697;
  transform: translate(11.4438vw, -10px) scale(0.3485);
  animation: fall-50 28s -20s linear infinite;
}
@keyframes fall-50 {
  70.027% {
    transform: translate(19.4474vw, 70.027vh) scale(0.3485);
  }
  to {
    transform: translate(15.4456vw, 100vh) scale(0.3485);
  }
}
.snow:nth-child(51) {
  opacity: 0.2975;
  transform: translate(19.4601vw, -10px) scale(0.7043);
  animation: fall-51 13s -16s linear infinite;
}
@keyframes fall-51 {
  78.152% {
    transform: translate(14.5196vw, 78.152vh) scale(0.7043);
  }
  to {
    transform: translate(16.98985vw, 100vh) scale(0.7043);
  }
}
.snow:nth-child(52) {
  opacity: 0.3942;
  transform: translate(97.0275vw, -10px) scale(0.2882);
  animation: fall-52 13s -7s linear infinite;
}
@keyframes fall-52 {
  62.838% {
    transform: translate(98.5797vw, 62.838vh) scale(0.2882);
  }
  to {
    transform: translate(97.8036vw, 100vh) scale(0.2882);
  }
}
.snow:nth-child(53) {
  opacity: 0.436;
  transform: translate(44.8616vw, -10px) scale(0.4763);
  animation: fall-53 15s -4s linear infinite;
}
@keyframes fall-53 {
  62.334% {
    transform: translate(40.6264vw, 62.334vh) scale(0.4763);
  }
  to {
    transform: translate(42.744vw, 100vh) scale(0.4763);
  }
}
.snow:nth-child(54) {
  opacity: 0.9452;
  transform: translate(31.5055vw, -10px) scale(0.8282);
  animation: fall-54 23s -15s linear infinite;
}
@keyframes fall-54 {
  66.11% {
    transform: translate(30.9069vw, 66.11vh) scale(0.8282);
  }
  to {
    transform: translate(31.2062vw, 100vh) scale(0.8282);
  }
}
.snow:nth-child(55) {
  opacity: 0.1378;
  transform: translate(90.0021vw, -10px) scale(0.9134);
  animation: fall-55 20s -8s linear infinite;
}
@keyframes fall-55 {
  54.694% {
    transform: translate(81.2206vw, 54.694vh) scale(0.9134);
  }
  to {
    transform: translate(85.61135vw, 100vh) scale(0.9134);
  }
}
.snow:nth-child(56) {
  opacity: 0.0639;
  transform: translate(0.9379vw, -10px) scale(0.8131);
  animation: fall-56 13s -1s linear infinite;
}
@keyframes fall-56 {
  63.56% {
    transform: translate(1.1252vw, 63.56vh) scale(0.8131);
  }
  to {
    transform: translate(1.03155vw, 100vh) scale(0.8131);
  }
}
.snow:nth-child(57) {
  opacity: 0.0692;
  transform: translate(64.031vw, -10px) scale(0.8985);
  animation: fall-57 15s -25s linear infinite;
}
@keyframes fall-57 {
  56.023% {
    transform: translate(58.9332vw, 56.023vh) scale(0.8985);
  }
  to {
    transform: translate(61.4821vw, 100vh) scale(0.8985);
  }
}
.snow:nth-child(58) {
  opacity: 0.4061;
  transform: translate(92.6054vw, -10px) scale(0.6675);
  animation: fall-58 10s -8s linear infinite;
}
@keyframes fall-58 {
  43.581% {
    transform: translate(100.7849vw, 43.581vh) scale(0.6675);
  }
  to {
    transform: translate(96.69515vw, 100vh) scale(0.6675);
  }
}
.snow:nth-child(59) {
  opacity: 0.2137;
  transform: translate(71.0299vw, -10px) scale(0.3528);
  animation: fall-59 14s -30s linear infinite;
}
@keyframes fall-59 {
  42.373% {
    transform: translate(70.4022vw, 42.373vh) scale(0.3528);
  }
  to {
    transform: translate(70.71605vw, 100vh) scale(0.3528);
  }
}
.snow:nth-child(60) {
  opacity: 0.7104;
  transform: translate(42.4632vw, -10px) scale(0.5272);
  animation: fall-60 18s -8s linear infinite;
}
@keyframes fall-60 {
  42.449% {
    transform: translate(34.1248vw, 42.449vh) scale(0.5272);
  }
  to {
    transform: translate(38.294vw, 100vh) scale(0.5272);
  }
}
.snow:nth-child(61) {
  opacity: 0.8853;
  transform: translate(49.5596vw, -10px) scale(0.5662);
  animation: fall-61 20s -16s linear infinite;
}
@keyframes fall-61 {
  73.251% {
    transform: translate(57.6833vw, 73.251vh) scale(0.5662);
  }
  to {
    transform: translate(53.62145vw, 100vh) scale(0.5662);
  }
}
.snow:nth-child(62) {
  opacity: 0.462;
  transform: translate(79.6318vw, -10px) scale(0.4711);
  animation: fall-62 16s -28s linear infinite;
}
@keyframes fall-62 {
  38.466% {
    transform: translate(70.4056vw, 38.466vh) scale(0.4711);
  }
  to {
    transform: translate(75.0187vw, 100vh) scale(0.4711);
  }
}
.snow:nth-child(63) {
  opacity: 0.5016;
  transform: translate(27.6397vw, -10px) scale(0.0314);
  animation: fall-63 29s -21s linear infinite;
}
@keyframes fall-63 {
  74.787% {
    transform: translate(28.3017vw, 74.787vh) scale(0.0314);
  }
  to {
    transform: translate(27.9707vw, 100vh) scale(0.0314);
  }
}
.snow:nth-child(64) {
  opacity: 0.4354;
  transform: translate(51.523vw, -10px) scale(0.3751);
  animation: fall-64 24s -8s linear infinite;
}
@keyframes fall-64 {
  41.914% {
    transform: translate(44.4145vw, 41.914vh) scale(0.3751);
  }
  to {
    transform: translate(47.96875vw, 100vh) scale(0.3751);
  }
}
.snow:nth-child(65) {
  opacity: 0.9836;
  transform: translate(52.9074vw, -10px) scale(0.8974);
  animation: fall-65 15s -9s linear infinite;
}
@keyframes fall-65 {
  40.916% {
    transform: translate(44.0909vw, 40.916vh) scale(0.8974);
  }
  to {
    transform: translate(48.49915vw, 100vh) scale(0.8974);
  }
}
.snow:nth-child(66) {
  opacity: 0.692;
  transform: translate(64.0055vw, -10px) scale(0.9367);
  animation: fall-66 27s -26s linear infinite;
}
@keyframes fall-66 {
  78.716% {
    transform: translate(69.651vw, 78.716vh) scale(0.9367);
  }
  to {
    transform: translate(66.82825vw, 100vh) scale(0.9367);
  }
}
.snow:nth-child(67) {
  opacity: 0.459;
  transform: translate(95.4862vw, -10px) scale(0.2155);
  animation: fall-67 30s -12s linear infinite;
}
@keyframes fall-67 {
  39.238% {
    transform: translate(98.9099vw, 39.238vh) scale(0.2155);
  }
  to {
    transform: translate(97.19805vw, 100vh) scale(0.2155);
  }
}
.snow:nth-child(68) {
  opacity: 0.9059;
  transform: translate(15.5976vw, -10px) scale(0.61);
  animation: fall-68 29s -27s linear infinite;
}
@keyframes fall-68 {
  42.419% {
    transform: translate(6.098vw, 42.419vh) scale(0.61);
  }
  to {
    transform: translate(10.8478vw, 100vh) scale(0.61);
  }
}
.snow:nth-child(69) {
  opacity: 0.3264;
  transform: translate(99.1954vw, -10px) scale(0.9252);
  animation: fall-69 22s -27s linear infinite;
}
@keyframes fall-69 {
  36.637% {
    transform: translate(91.9721vw, 36.637vh) scale(0.9252);
  }
  to {
    transform: translate(95.58375vw, 100vh) scale(0.9252);
  }
}
.snow:nth-child(70) {
  opacity: 0.2088;
  transform: translate(94.8313vw, -10px) scale(0.7248);
  animation: fall-70 14s -28s linear infinite;
}
@keyframes fall-70 {
  54.875% {
    transform: translate(88.0528vw, 54.875vh) scale(0.7248);
  }
  to {
    transform: translate(91.44205vw, 100vh) scale(0.7248);
  }
}
.snow:nth-child(71) {
  opacity: 0.0616;
  transform: translate(16.0124vw, -10px) scale(0.496);
  animation: fall-71 20s -4s linear infinite;
}
@keyframes fall-71 {
  39.161% {
    transform: translate(11.6331vw, 39.161vh) scale(0.496);
  }
  to {
    transform: translate(13.82275vw, 100vh) scale(0.496);
  }
}
.snow:nth-child(72) {
  opacity: 0.7813;
  transform: translate(9.7663vw, -10px) scale(0.2014);
  animation: fall-72 20s -11s linear infinite;
}
@keyframes fall-72 {
  52.271% {
    transform: translate(14.1938vw, 52.271vh) scale(0.2014);
  }
  to {
    transform: translate(11.98005vw, 100vh) scale(0.2014);
  }
}
.snow:nth-child(73) {
  opacity: 0.4847;
  transform: translate(31.6553vw, -10px) scale(0.8789);
  animation: fall-73 20s -5s linear infinite;
}
@keyframes fall-73 {
  44.158% {
    transform: translate(37.7181vw, 44.158vh) scale(0.8789);
  }
  to {
    transform: translate(34.6867vw, 100vh) scale(0.8789);
  }
}
.snow:nth-child(74) {
  opacity: 0.7288;
  transform: translate(52.9569vw, -10px) scale(0.4385);
  animation: fall-74 27s -19s linear infinite;
}
@keyframes fall-74 {
  49.699% {
    transform: translate(52.5103vw, 49.699vh) scale(0.4385);
  }
  to {
    transform: translate(52.7336vw, 100vh) scale(0.4385);
  }
}
.snow:nth-child(75) {
  opacity: 0.3742;
  transform: translate(31.4504vw, -10px) scale(0.2816);
  animation: fall-75 15s -9s linear infinite;
}
@keyframes fall-75 {
  65.185% {
    transform: translate(27.0735vw, 65.185vh) scale(0.2816);
  }
  to {
    transform: translate(29.26195vw, 100vh) scale(0.2816);
  }
}
.snow:nth-child(76) {
  opacity: 0.8361;
  transform: translate(75.6134vw, -10px) scale(0.3159);
  animation: fall-76 12s -5s linear infinite;
}
@keyframes fall-76 {
  32.123% {
    transform: translate(73.5459vw, 32.123vh) scale(0.3159);
  }
  to {
    transform: translate(74.57965vw, 100vh) scale(0.3159);
  }
}
.snow:nth-child(77) {
  opacity: 0.2899;
  transform: translate(47.5304vw, -10px) scale(0.0376);
  animation: fall-77 28s -9s linear infinite;
}
@keyframes fall-77 {
  36.5% {
    transform: translate(44.4285vw, 36.5vh) scale(0.0376);
  }
  to {
    transform: translate(45.97945vw, 100vh) scale(0.0376);
  }
}
.snow:nth-child(78) {
  opacity: 0.2987;
  transform: translate(40.1373vw, -10px) scale(0.8516);
  animation: fall-78 18s -15s linear infinite;
}
@keyframes fall-78 {
  62.306% {
    transform: translate(40.8692vw, 62.306vh) scale(0.8516);
  }
  to {
    transform: translate(40.50325vw, 100vh) scale(0.8516);
  }
}
.snow:nth-child(79) {
  opacity: 0.5884;
  transform: translate(55.9944vw, -10px) scale(0.9584);
  animation: fall-79 14s -18s linear infinite;
}
@keyframes fall-79 {
  42.383% {
    transform: translate(46.1715vw, 42.383vh) scale(0.9584);
  }
  to {
    transform: translate(51.08295vw, 100vh) scale(0.9584);
  }
}
.snow:nth-child(80) {
  opacity: 0.4585;
  transform: translate(82.4308vw, -10px) scale(0.5233);
  animation: fall-80 21s -10s linear infinite;
}
@keyframes fall-80 {
  65.715% {
    transform: translate(89.9734vw, 65.715vh) scale(0.5233);
  }
  to {
    transform: translate(86.2021vw, 100vh) scale(0.5233);
  }
}
.snow:nth-child(81) {
  opacity: 0.4391;
  transform: translate(30.321vw, -10px) scale(0.8247);
  animation: fall-81 25s -23s linear infinite;
}
@keyframes fall-81 {
  32.862% {
    transform: translate(39.3423vw, 32.862vh) scale(0.8247);
  }
  to {
    transform: translate(34.83165vw, 100vh) scale(0.8247);
  }
}
.snow:nth-child(82) {
  opacity: 0.6084;
  transform: translate(7.8913vw, -10px) scale(0.2863);
  animation: fall-82 21s -5s linear infinite;
}
@keyframes fall-82 {
  77.795% {
    transform: translate(4.3953vw, 77.795vh) scale(0.2863);
  }
  to {
    transform: translate(6.1433vw, 100vh) scale(0.2863);
  }
}
.snow:nth-child(83) {
  opacity: 0.1215;
  transform: translate(19.1875vw, -10px) scale(0.7463);
  animation: fall-83 15s -17s linear infinite;
}
@keyframes fall-83 {
  46.58% {
    transform: translate(10.5758vw, 46.58vh) scale(0.7463);
  }
  to {
    transform: translate(14.88165vw, 100vh) scale(0.7463);
  }
}
.snow:nth-child(84) {
  opacity: 0.5949;
  transform: translate(20.9403vw, -10px) scale(0.9626);
  animation: fall-84 27s -1s linear infinite;
}
@keyframes fall-84 {
  59.135% {
    transform: translate(12.9604vw, 59.135vh) scale(0.9626);
  }
  to {
    transform: translate(16.95035vw, 100vh) scale(0.9626);
  }
}
.snow:nth-child(85) {
  opacity: 0.7834;
  transform: translate(37.6747vw, -10px) scale(0.544);
  animation: fall-85 23s -14s linear infinite;
}
@keyframes fall-85 {
  78.201% {
    transform: translate(31.8676vw, 78.201vh) scale(0.544);
  }
  to {
    transform: translate(34.77115vw, 100vh) scale(0.544);
  }
}
.snow:nth-child(86) {
  opacity: 0.6974;
  transform: translate(93.9662vw, -10px) scale(0.8137);
  animation: fall-86 21s -26s linear infinite;
}
@keyframes fall-86 {
  62.983% {
    transform: translate(91.0889vw, 62.983vh) scale(0.8137);
  }
  to {
    transform: translate(92.52755vw, 100vh) scale(0.8137);
  }
}
.snow:nth-child(87) {
  opacity: 0.7287;
  transform: translate(48.7026vw, -10px) scale(0.1048);
  animation: fall-87 25s -30s linear infinite;
}
@keyframes fall-87 {
  69.16% {
    transform: translate(53.4106vw, 69.16vh) scale(0.1048);
  }
  to {
    transform: translate(51.0566vw, 100vh) scale(0.1048);
  }
}
.snow:nth-child(88) {
  opacity: 0.4584;
  transform: translate(10.8908vw, -10px) scale(0.5175);
  animation: fall-88 11s -1s linear infinite;
}
@keyframes fall-88 {
  41.616% {
    transform: translate(15.7218vw, 41.616vh) scale(0.5175);
  }
  to {
    transform: translate(13.3063vw, 100vh) scale(0.5175);
  }
}
.snow:nth-child(89) {
  opacity: 0.6636;
  transform: translate(44.4289vw, -10px) scale(0.0044);
  animation: fall-89 27s -22s linear infinite;
}
@keyframes fall-89 {
  75.057% {
    transform: translate(49.8183vw, 75.057vh) scale(0.0044);
  }
  to {
    transform: translate(47.1236vw, 100vh) scale(0.0044);
  }
}
.snow:nth-child(90) {
  opacity: 0.4865;
  transform: translate(58.8493vw, -10px) scale(0.6023);
  animation: fall-90 25s -20s linear infinite;
}
@keyframes fall-90 {
  72.873% {
    transform: translate(56.6642vw, 72.873vh) scale(0.6023);
  }
  to {
    transform: translate(57.75675vw, 100vh) scale(0.6023);
  }
}
.snow:nth-child(91) {
  opacity: 0.8086;
  transform: translate(47.954vw, -10px) scale(0.9945);
  animation: fall-91 21s -22s linear infinite;
}
@keyframes fall-91 {
  67.331% {
    transform: translate(55.409vw, 67.331vh) scale(0.9945);
  }
  to {
    transform: translate(51.6815vw, 100vh) scale(0.9945);
  }
}
.snow:nth-child(92) {
  opacity: 0.2141;
  transform: translate(89.4994vw, -10px) scale(0.5488);
  animation: fall-92 18s -3s linear infinite;
}
@keyframes fall-92 {
  49.879% {
    transform: translate(98.1185vw, 49.879vh) scale(0.5488);
  }
  to {
    transform: translate(93.80895vw, 100vh) scale(0.5488);
  }
}
.snow:nth-child(93) {
  opacity: 0.3345;
  transform: translate(16.6935vw, -10px) scale(0.0368);
  animation: fall-93 16s -7s linear infinite;
}
@keyframes fall-93 {
  43.181% {
    transform: translate(17.0968vw, 43.181vh) scale(0.0368);
  }
  to {
    transform: translate(16.89515vw, 100vh) scale(0.0368);
  }
}
.snow:nth-child(94) {
  opacity: 0.8278;
  transform: translate(96.261vw, -10px) scale(0.4812);
  animation: fall-94 28s -22s linear infinite;
}
@keyframes fall-94 {
  58.216% {
    transform: translate(103.3849vw, 58.216vh) scale(0.4812);
  }
  to {
    transform: translate(99.82295vw, 100vh) scale(0.4812);
  }
}
.snow:nth-child(95) {
  opacity: 0.8448;
  transform: translate(2.2506vw, -10px) scale(0.6438);
  animation: fall-95 15s -21s linear infinite;
}
@keyframes fall-95 {
  44.29% {
    transform: translate(8.039vw, 44.29vh) scale(0.6438);
  }
  to {
    transform: translate(5.1448vw, 100vh) scale(0.6438);
  }
}
.snow:nth-child(96) {
  opacity: 0.8296;
  transform: translate(64.7738vw, -10px) scale(0.3851);
  animation: fall-96 26s -6s linear infinite;
}
@keyframes fall-96 {
  42.645% {
    transform: translate(63.497vw, 42.645vh) scale(0.3851);
  }
  to {
    transform: translate(64.1354vw, 100vh) scale(0.3851);
  }
}
.snow:nth-child(97) {
  opacity: 0.318;
  transform: translate(54.271vw, -10px) scale(0.0781);
  animation: fall-97 29s -1s linear infinite;
}
@keyframes fall-97 {
  34.693% {
    transform: translate(58.0273vw, 34.693vh) scale(0.0781);
  }
  to {
    transform: translate(56.14915vw, 100vh) scale(0.0781);
  }
}
.snow:nth-child(98) {
  opacity: 0.4901;
  transform: translate(34.3149vw, -10px) scale(0.0917);
  animation: fall-98 12s -22s linear infinite;
}
@keyframes fall-98 {
  39.142% {
    transform: translate(37.6155vw, 39.142vh) scale(0.0917);
  }
  to {
    transform: translate(35.9652vw, 100vh) scale(0.0917);
  }
}
.snow:nth-child(99) {
  opacity: 0.002;
  transform: translate(79.7391vw, -10px) scale(0.6208);
  animation: fall-99 19s -14s linear infinite;
}
@keyframes fall-99 {
  67.976% {
    transform: translate(85.3239vw, 67.976vh) scale(0.6208);
  }
  to {
    transform: translate(82.5315vw, 100vh) scale(0.6208);
  }
}
.snow:nth-child(100) {
  opacity: 0.6936;
  transform: translate(24.6612vw, -10px) scale(0.978);
  animation: fall-100 15s -4s linear infinite;
}
@keyframes fall-100 {
  67.943% {
    transform: translate(28.2656vw, 67.943vh) scale(0.978);
  }
  to {
    transform: translate(26.4634vw, 100vh) scale(0.978);
  }
}
.snow:nth-child(101) {
  opacity: 0.0188;
  transform: translate(32.8021vw, -10px) scale(0.4615);
  animation: fall-101 30s -26s linear infinite;
}
@keyframes fall-101 {
  37.816% {
    transform: translate(29.1262vw, 37.816vh) scale(0.4615);
  }
  to {
    transform: translate(30.96415vw, 100vh) scale(0.4615);
  }
}
.snow:nth-child(102) {
  opacity: 0.1189;
  transform: translate(36.6853vw, -10px) scale(0.6799);
  animation: fall-102 23s -20s linear infinite;
}
@keyframes fall-102 {
  54.635% {
    transform: translate(29.3668vw, 54.635vh) scale(0.6799);
  }
  to {
    transform: translate(33.02605vw, 100vh) scale(0.6799);
  }
}
.snow:nth-child(103) {
  opacity: 0.5172;
  transform: translate(75.7185vw, -10px) scale(0.3737);
  animation: fall-103 21s -15s linear infinite;
}
@keyframes fall-103 {
  67.763% {
    transform: translate(68.0428vw, 67.763vh) scale(0.3737);
  }
  to {
    transform: translate(71.88065vw, 100vh) scale(0.3737);
  }
}
.snow:nth-child(104) {
  opacity: 0.6382;
  transform: translate(88.3367vw, -10px) scale(0.3021);
  animation: fall-104 22s -3s linear infinite;
}
@keyframes fall-104 {
  59.951% {
    transform: translate(78.4784vw, 59.951vh) scale(0.3021);
  }
  to {
    transform: translate(83.40755vw, 100vh) scale(0.3021);
  }
}
.snow:nth-child(105) {
  opacity: 0.5367;
  transform: translate(79.8535vw, -10px) scale(0.3284);
  animation: fall-105 27s -27s linear infinite;
}
@keyframes fall-105 {
  62.423% {
    transform: translate(73.6489vw, 62.423vh) scale(0.3284);
  }
  to {
    transform: translate(76.7512vw, 100vh) scale(0.3284);
  }
}
.snow:nth-child(106) {
  opacity: 0.3006;
  transform: translate(75.3683vw, -10px) scale(0.5815);
  animation: fall-106 17s -1s linear infinite;
}
@keyframes fall-106 {
  53.675% {
    transform: translate(66.7346vw, 53.675vh) scale(0.5815);
  }
  to {
    transform: translate(71.05145vw, 100vh) scale(0.5815);
  }
}
.snow:nth-child(107) {
  opacity: 0.5597;
  transform: translate(20.8997vw, -10px) scale(0.1154);
  animation: fall-107 24s -10s linear infinite;
}
@keyframes fall-107 {
  77.078% {
    transform: translate(13.0758vw, 77.078vh) scale(0.1154);
  }
  to {
    transform: translate(16.98775vw, 100vh) scale(0.1154);
  }
}
.snow:nth-child(108) {
  opacity: 0.6208;
  transform: translate(59.6235vw, -10px) scale(0.8373);
  animation: fall-108 30s -12s linear infinite;
}
@keyframes fall-108 {
  56.87% {
    transform: translate(66.6712vw, 56.87vh) scale(0.8373);
  }
  to {
    transform: translate(63.14735vw, 100vh) scale(0.8373);
  }
}
.snow:nth-child(109) {
  opacity: 0.0637;
  transform: translate(60.6982vw, -10px) scale(0.4519);
  animation: fall-109 12s -18s linear infinite;
}
@keyframes fall-109 {
  48.383% {
    transform: translate(63.5587vw, 48.383vh) scale(0.4519);
  }
  to {
    transform: translate(62.12845vw, 100vh) scale(0.4519);
  }
}
.snow:nth-child(110) {
  opacity: 0.858;
  transform: translate(62.0784vw, -10px) scale(0.7669);
  animation: fall-110 16s -26s linear infinite;
}
@keyframes fall-110 {
  38.627% {
    transform: translate(54.4866vw, 38.627vh) scale(0.7669);
  }
  to {
    transform: translate(58.2825vw, 100vh) scale(0.7669);
  }
}
.snow:nth-child(111) {
  opacity: 0.5627;
  transform: translate(81.3689vw, -10px) scale(0.02);
  animation: fall-111 22s -29s linear infinite;
}
@keyframes fall-111 {
  69.155% {
    transform: translate(84.8958vw, 69.155vh) scale(0.02);
  }
  to {
    transform: translate(83.13235vw, 100vh) scale(0.02);
  }
}
.snow:nth-child(112) {
  opacity: 0.0892;
  transform: translate(51.8269vw, -10px) scale(0.4873);
  animation: fall-112 22s -16s linear infinite;
}
@keyframes fall-112 {
  70.451% {
    transform: translate(48.1182vw, 70.451vh) scale(0.4873);
  }
  to {
    transform: translate(49.97255vw, 100vh) scale(0.4873);
  }
}
.snow:nth-child(113) {
  opacity: 0.6134;
  transform: translate(61.4174vw, -10px) scale(0.2653);
  animation: fall-113 22s -11s linear infinite;
}
@keyframes fall-113 {
  61.279% {
    transform: translate(70.8796vw, 61.279vh) scale(0.2653);
  }
  to {
    transform: translate(66.1485vw, 100vh) scale(0.2653);
  }
}
.snow:nth-child(114) {
  opacity: 0.1096;
  transform: translate(12.9282vw, -10px) scale(0.1644);
  animation: fall-114 18s -18s linear infinite;
}
@keyframes fall-114 {
  44.377% {
    transform: translate(19.8405vw, 44.377vh) scale(0.1644);
  }
  to {
    transform: translate(16.38435vw, 100vh) scale(0.1644);
  }
}
.snow:nth-child(115) {
  opacity: 0.6859;
  transform: translate(39.6821vw, -10px) scale(0.195);
  animation: fall-115 15s -7s linear infinite;
}
@keyframes fall-115 {
  62.397% {
    transform: translate(39.5692vw, 62.397vh) scale(0.195);
  }
  to {
    transform: translate(39.62565vw, 100vh) scale(0.195);
  }
}
.snow:nth-child(116) {
  opacity: 0.0829;
  transform: translate(91.5716vw, -10px) scale(0.8199);
  animation: fall-116 22s -28s linear infinite;
}
@keyframes fall-116 {
  55.349% {
    transform: translate(81.9183vw, 55.349vh) scale(0.8199);
  }
  to {
    transform: translate(86.74495vw, 100vh) scale(0.8199);
  }
}
.snow:nth-child(117) {
  opacity: 0.4068;
  transform: translate(47.7002vw, -10px) scale(0.057);
  animation: fall-117 17s -18s linear infinite;
}
@keyframes fall-117 {
  58.735% {
    transform: translate(55.5294vw, 58.735vh) scale(0.057);
  }
  to {
    transform: translate(51.6148vw, 100vh) scale(0.057);
  }
}
.snow:nth-child(118) {
  opacity: 0.8623;
  transform: translate(40.8609vw, -10px) scale(0.6318);
  animation: fall-118 26s -26s linear infinite;
}
@keyframes fall-118 {
  32.128% {
    transform: translate(36.5526vw, 32.128vh) scale(0.6318);
  }
  to {
    transform: translate(38.70675vw, 100vh) scale(0.6318);
  }
}
.snow:nth-child(119) {
  opacity: 0.6722;
  transform: translate(23.4891vw, -10px) scale(0.4761);
  animation: fall-119 15s -16s linear infinite;
}
@keyframes fall-119 {
  72.839% {
    transform: translate(31.5548vw, 72.839vh) scale(0.4761);
  }
  to {
    transform: translate(27.52195vw, 100vh) scale(0.4761);
  }
}
.snow:nth-child(120) {
  opacity: 0.9712;
  transform: translate(91.8517vw, -10px) scale(0.5477);
  animation: fall-120 17s -25s linear infinite;
}
@keyframes fall-120 {
  36.33% {
    transform: translate(89.8001vw, 36.33vh) scale(0.5477);
  }
  to {
    transform: translate(90.8259vw, 100vh) scale(0.5477);
  }
}
.snow:nth-child(121) {
  opacity: 0.0342;
  transform: translate(19.5416vw, -10px) scale(0.8594);
  animation: fall-121 21s -12s linear infinite;
}
@keyframes fall-121 {
  47.916% {
    transform: translate(21.7783vw, 47.916vh) scale(0.8594);
  }
  to {
    transform: translate(20.65995vw, 100vh) scale(0.8594);
  }
}
.snow:nth-child(122) {
  opacity: 0.1459;
  transform: translate(35.0174vw, -10px) scale(0.9986);
  animation: fall-122 30s -25s linear infinite;
}
@keyframes fall-122 {
  33.449% {
    transform: translate(25.7949vw, 33.449vh) scale(0.9986);
  }
  to {
    transform: translate(30.40615vw, 100vh) scale(0.9986);
  }
}
.snow:nth-child(123) {
  opacity: 0.0249;
  transform: translate(28.0923vw, -10px) scale(0.6633);
  animation: fall-123 25s -1s linear infinite;
}
@keyframes fall-123 {
  41.978% {
    transform: translate(21.3345vw, 41.978vh) scale(0.6633);
  }
  to {
    transform: translate(24.7134vw, 100vh) scale(0.6633);
  }
}
.snow:nth-child(124) {
  opacity: 0.6912;
  transform: translate(67.8039vw, -10px) scale(0.3888);
  animation: fall-124 18s -7s linear infinite;
}
@keyframes fall-124 {
  30.765% {
    transform: translate(74.7343vw, 30.765vh) scale(0.3888);
  }
  to {
    transform: translate(71.2691vw, 100vh) scale(0.3888);
  }
}
.snow:nth-child(125) {
  opacity: 0.2228;
  transform: translate(79.2796vw, -10px) scale(0.1587);
  animation: fall-125 18s -8s linear infinite;
}
@keyframes fall-125 {
  34.521% {
    transform: translate(88.631vw, 34.521vh) scale(0.1587);
  }
  to {
    transform: translate(83.9553vw, 100vh) scale(0.1587);
  }
}
.snow:nth-child(126) {
  opacity: 0.4894;
  transform: translate(11.8944vw, -10px) scale(0.6897);
  animation: fall-126 17s -17s linear infinite;
}
@keyframes fall-126 {
  45.066% {
    transform: translate(7.9166vw, 45.066vh) scale(0.6897);
  }
  to {
    transform: translate(9.9055vw, 100vh) scale(0.6897);
  }
}
.snow:nth-child(127) {
  opacity: 0.0005;
  transform: translate(20.5302vw, -10px) scale(0.9751);
  animation: fall-127 17s -6s linear infinite;
}
@keyframes fall-127 {
  43.938% {
    transform: translate(25.381vw, 43.938vh) scale(0.9751);
  }
  to {
    transform: translate(22.9556vw, 100vh) scale(0.9751);
  }
}
.snow:nth-child(128) {
  opacity: 0.3013;
  transform: translate(54.3269vw, -10px) scale(0.4021);
  animation: fall-128 25s -14s linear infinite;
}
@keyframes fall-128 {
  76.256% {
    transform: translate(56.0476vw, 76.256vh) scale(0.4021);
  }
  to {
    transform: translate(55.18725vw, 100vh) scale(0.4021);
  }
}
.snow:nth-child(129) {
  opacity: 0.0749;
  transform: translate(19.7572vw, -10px) scale(0.0161);
  animation: fall-129 29s -8s linear infinite;
}
@keyframes fall-129 {
  30.067% {
    transform: translate(26.6515vw, 30.067vh) scale(0.0161);
  }
  to {
    transform: translate(23.20435vw, 100vh) scale(0.0161);
  }
}
.snow:nth-child(130) {
  opacity: 0.7895;
  transform: translate(28.5612vw, -10px) scale(0.8903);
  animation: fall-130 23s -27s linear infinite;
}
@keyframes fall-130 {
  46.792% {
    transform: translate(19.9538vw, 46.792vh) scale(0.8903);
  }
  to {
    transform: translate(24.2575vw, 100vh) scale(0.8903);
  }
}
.snow:nth-child(131) {
  opacity: 0.7381;
  transform: translate(62.6012vw, -10px) scale(0.5592);
  animation: fall-131 12s -23s linear infinite;
}
@keyframes fall-131 {
  55.609% {
    transform: translate(53.5337vw, 55.609vh) scale(0.5592);
  }
  to {
    transform: translate(58.06745vw, 100vh) scale(0.5592);
  }
}
.snow:nth-child(132) {
  opacity: 0.4469;
  transform: translate(77.1036vw, -10px) scale(0.7604);
  animation: fall-132 10s -1s linear infinite;
}
@keyframes fall-132 {
  77.599% {
    transform: translate(76.3952vw, 77.599vh) scale(0.7604);
  }
  to {
    transform: translate(76.7494vw, 100vh) scale(0.7604);
  }
}
.snow:nth-child(133) {
  opacity: 0.5408;
  transform: translate(47.012vw, -10px) scale(0.4935);
  animation: fall-133 13s -21s linear infinite;
}
@keyframes fall-133 {
  65.474% {
    transform: translate(52.758vw, 65.474vh) scale(0.4935);
  }
  to {
    transform: translate(49.885vw, 100vh) scale(0.4935);
  }
}
.snow:nth-child(134) {
  opacity: 0.3219;
  transform: translate(68.0894vw, -10px) scale(0.7134);
  animation: fall-134 25s -12s linear infinite;
}
@keyframes fall-134 {
  64.718% {
    transform: translate(65.5891vw, 64.718vh) scale(0.7134);
  }
  to {
    transform: translate(66.83925vw, 100vh) scale(0.7134);
  }
}
.snow:nth-child(135) {
  opacity: 0.4285;
  transform: translate(31.6074vw, -10px) scale(0.9078);
  animation: fall-135 18s -4s linear infinite;
}
@keyframes fall-135 {
  51.664% {
    transform: translate(41.3074vw, 51.664vh) scale(0.9078);
  }
  to {
    transform: translate(36.4574vw, 100vh) scale(0.9078);
  }
}
.snow:nth-child(136) {
  opacity: 0.281;
  transform: translate(13.8037vw, -10px) scale(0.6529);
  animation: fall-136 16s -18s linear infinite;
}
@keyframes fall-136 {
  47.622% {
    transform: translate(19.2498vw, 47.622vh) scale(0.6529);
  }
  to {
    transform: translate(16.52675vw, 100vh) scale(0.6529);
  }
}
.snow:nth-child(137) {
  opacity: 0.65;
  transform: translate(97.2868vw, -10px) scale(0.2101);
  animation: fall-137 29s -11s linear infinite;
}
@keyframes fall-137 {
  72.896% {
    transform: translate(89.3607vw, 72.896vh) scale(0.2101);
  }
  to {
    transform: translate(93.32375vw, 100vh) scale(0.2101);
  }
}
.snow:nth-child(138) {
  opacity: 0.8238;
  transform: translate(48.0323vw, -10px) scale(0.627);
  animation: fall-138 17s -17s linear infinite;
}
@keyframes fall-138 {
  75.807% {
    transform: translate(38.8727vw, 75.807vh) scale(0.627);
  }
  to {
    transform: translate(43.4525vw, 100vh) scale(0.627);
  }
}
.snow:nth-child(139) {
  opacity: 0.226;
  transform: translate(97.3274vw, -10px) scale(0.294);
  animation: fall-139 17s -28s linear infinite;
}
@keyframes fall-139 {
  55.843% {
    transform: translate(106.9818vw, 55.843vh) scale(0.294);
  }
  to {
    transform: translate(102.1546vw, 100vh) scale(0.294);
  }
}
.snow:nth-child(140) {
  opacity: 0.8328;
  transform: translate(36.2046vw, -10px) scale(0.5986);
  animation: fall-140 13s -10s linear infinite;
}
@keyframes fall-140 {
  30.619% {
    transform: translate(30.3349vw, 30.619vh) scale(0.5986);
  }
  to {
    transform: translate(33.26975vw, 100vh) scale(0.5986);
  }
}
.snow:nth-child(141) {
  opacity: 0.3865;
  transform: translate(99.2172vw, -10px) scale(0.5607);
  animation: fall-141 25s -26s linear infinite;
}
@keyframes fall-141 {
  54.311% {
    transform: translate(99.4577vw, 54.311vh) scale(0.5607);
  }
  to {
    transform: translate(99.33745vw, 100vh) scale(0.5607);
  }
}
.snow:nth-child(142) {
  opacity: 0.5542;
  transform: translate(51.9229vw, -10px) scale(0.3853);
  animation: fall-142 19s -2s linear infinite;
}
@keyframes fall-142 {
  53.079% {
    transform: translate(50.0208vw, 53.079vh) scale(0.3853);
  }
  to {
    transform: translate(50.97185vw, 100vh) scale(0.3853);
  }
}
.snow:nth-child(143) {
  opacity: 0.3625;
  transform: translate(72.4793vw, -10px) scale(0.8792);
  animation: fall-143 24s -27s linear infinite;
}
@keyframes fall-143 {
  65.897% {
    transform: translate(67.6932vw, 65.897vh) scale(0.8792);
  }
  to {
    transform: translate(70.08625vw, 100vh) scale(0.8792);
  }
}
.snow:nth-child(144) {
  opacity: 0.7608;
  transform: translate(7.7527vw, -10px) scale(0.131);
  animation: fall-144 15s -25s linear infinite;
}
@keyframes fall-144 {
  70.699% {
    transform: translate(7.2276vw, 70.699vh) scale(0.131);
  }
  to {
    transform: translate(7.49015vw, 100vh) scale(0.131);
  }
}
.snow:nth-child(145) {
  opacity: 0.6824;
  transform: translate(22.9491vw, -10px) scale(0.1369);
  animation: fall-145 11s -16s linear infinite;
}
@keyframes fall-145 {
  54.412% {
    transform: translate(31.8213vw, 54.412vh) scale(0.1369);
  }
  to {
    transform: translate(27.3852vw, 100vh) scale(0.1369);
  }
}
.snow:nth-child(146) {
  opacity: 0.2643;
  transform: translate(33.9867vw, -10px) scale(0.3604);
  animation: fall-146 25s -2s linear infinite;
}
@keyframes fall-146 {
  66.845% {
    transform: translate(35.6187vw, 66.845vh) scale(0.3604);
  }
  to {
    transform: translate(34.8027vw, 100vh) scale(0.3604);
  }
}
.snow:nth-child(147) {
  opacity: 0.5478;
  transform: translate(60.9693vw, -10px) scale(0.8145);
  animation: fall-147 22s -23s linear infinite;
}
@keyframes fall-147 {
  67.246% {
    transform: translate(59.4053vw, 67.246vh) scale(0.8145);
  }
  to {
    transform: translate(60.1873vw, 100vh) scale(0.8145);
  }
}
.snow:nth-child(148) {
  opacity: 0.3379;
  transform: translate(70.7548vw, -10px) scale(0.1009);
  animation: fall-148 24s -15s linear infinite;
}
@keyframes fall-148 {
  72.699% {
    transform: translate(73.6205vw, 72.699vh) scale(0.1009);
  }
  to {
    transform: translate(72.18765vw, 100vh) scale(0.1009);
  }
}
.snow:nth-child(149) {
  opacity: 0.0771;
  transform: translate(59.8528vw, -10px) scale(0.6397);
  animation: fall-149 23s -8s linear infinite;
}
@keyframes fall-149 {
  43.981% {
    transform: translate(51.5768vw, 43.981vh) scale(0.6397);
  }
  to {
    transform: translate(55.7148vw, 100vh) scale(0.6397);
  }
}
.snow:nth-child(150) {
  opacity: 0.9143;
  transform: translate(67.1834vw, -10px) scale(0.2851);
  animation: fall-150 13s -30s linear infinite;
}
@keyframes fall-150 {
  43.081% {
    transform: translate(68.8444vw, 43.081vh) scale(0.2851);
  }
  to {
    transform: translate(68.0139vw, 100vh) scale(0.2851);
  }
}
.snow:nth-child(151) {
  opacity: 0.4203;
  transform: translate(41.3863vw, -10px) scale(0.994);
  animation: fall-151 22s -6s linear infinite;
}
@keyframes fall-151 {
  38.07% {
    transform: translate(36.7228vw, 38.07vh) scale(0.994);
  }
  to {
    transform: translate(39.05455vw, 100vh) scale(0.994);
  }
}
.snow:nth-child(152) {
  opacity: 0.9283;
  transform: translate(23.7838vw, -10px) scale(0.6085);
  animation: fall-152 20s -29s linear infinite;
}
@keyframes fall-152 {
  77.71% {
    transform: translate(27.6021vw, 77.71vh) scale(0.6085);
  }
  to {
    transform: translate(25.69295vw, 100vh) scale(0.6085);
  }
}
.snow:nth-child(153) {
  opacity: 0.9091;
  transform: translate(35.4378vw, -10px) scale(0.1728);
  animation: fall-153 27s -22s linear infinite;
}
@keyframes fall-153 {
  43.948% {
    transform: translate(26.6622vw, 43.948vh) scale(0.1728);
  }
  to {
    transform: translate(31.05vw, 100vh) scale(0.1728);
  }
}
.snow:nth-child(154) {
  opacity: 0.2611;
  transform: translate(30.2619vw, -10px) scale(0.5397);
  animation: fall-154 27s -14s linear infinite;
}
@keyframes fall-154 {
  67.53% {
    transform: translate(36.428vw, 67.53vh) scale(0.5397);
  }
  to {
    transform: translate(33.34495vw, 100vh) scale(0.5397);
  }
}
.snow:nth-child(155) {
  opacity: 0.5889;
  transform: translate(96.2492vw, -10px) scale(0.2008);
  animation: fall-155 13s -13s linear infinite;
}
@keyframes fall-155 {
  30.459% {
    transform: translate(99.8171vw, 30.459vh) scale(0.2008);
  }
  to {
    transform: translate(98.03315vw, 100vh) scale(0.2008);
  }
}
.snow:nth-child(156) {
  opacity: 0.708;
  transform: translate(87.8695vw, -10px) scale(0.889);
  animation: fall-156 12s -27s linear infinite;
}
@keyframes fall-156 {
  49.235% {
    transform: translate(96.0017vw, 49.235vh) scale(0.889);
  }
  to {
    transform: translate(91.9356vw, 100vh) scale(0.889);
  }
}
.snow:nth-child(157) {
  opacity: 0.8824;
  transform: translate(48.0008vw, -10px) scale(0.9267);
  animation: fall-157 14s -26s linear infinite;
}
@keyframes fall-157 {
  63.232% {
    transform: translate(49.7633vw, 63.232vh) scale(0.9267);
  }
  to {
    transform: translate(48.88205vw, 100vh) scale(0.9267);
  }
}
.snow:nth-child(158) {
  opacity: 0.8597;
  transform: translate(22.0254vw, -10px) scale(0.1905);
  animation: fall-158 13s -4s linear infinite;
}
@keyframes fall-158 {
  54.981% {
    transform: translate(25.7929vw, 54.981vh) scale(0.1905);
  }
  to {
    transform: translate(23.90915vw, 100vh) scale(0.1905);
  }
}
.snow:nth-child(159) {
  opacity: 0.7287;
  transform: translate(81.0142vw, -10px) scale(0.5476);
  animation: fall-159 22s -15s linear infinite;
}
@keyframes fall-159 {
  67.087% {
    transform: translate(71.1754vw, 67.087vh) scale(0.5476);
  }
  to {
    transform: translate(76.0948vw, 100vh) scale(0.5476);
  }
}
.snow:nth-child(160) {
  opacity: 0.7156;
  transform: translate(25.6766vw, -10px) scale(0.1181);
  animation: fall-160 20s -3s linear infinite;
}
@keyframes fall-160 {
  37.289% {
    transform: translate(16.2864vw, 37.289vh) scale(0.1181);
  }
  to {
    transform: translate(20.9815vw, 100vh) scale(0.1181);
  }
}
.snow:nth-child(161) {
  opacity: 0.9985;
  transform: translate(5.1106vw, -10px) scale(0.4027);
  animation: fall-161 20s -26s linear infinite;
}
@keyframes fall-161 {
  37.306% {
    transform: translate(3.3013vw, 37.306vh) scale(0.4027);
  }
  to {
    transform: translate(4.20595vw, 100vh) scale(0.4027);
  }
}
.snow:nth-child(162) {
  opacity: 0.8055;
  transform: translate(45.1534vw, -10px) scale(0.6627);
  animation: fall-162 23s -16s linear infinite;
}
@keyframes fall-162 {
  69.625% {
    transform: translate(52.1736vw, 69.625vh) scale(0.6627);
  }
  to {
    transform: translate(48.6635vw, 100vh) scale(0.6627);
  }
}
.snow:nth-child(163) {
  opacity: 0.7567;
  transform: translate(72.2023vw, -10px) scale(0.0956);
  animation: fall-163 27s -21s linear infinite;
}
@keyframes fall-163 {
  45.086% {
    transform: translate(68.6639vw, 45.086vh) scale(0.0956);
  }
  to {
    transform: translate(70.4331vw, 100vh) scale(0.0956);
  }
}
.snow:nth-child(164) {
  opacity: 0.3899;
  transform: translate(75.5134vw, -10px) scale(0.014);
  animation: fall-164 24s -10s linear infinite;
}
@keyframes fall-164 {
  58.382% {
    transform: translate(82.4392vw, 58.382vh) scale(0.014);
  }
  to {
    transform: translate(78.9763vw, 100vh) scale(0.014);
  }
}
.snow:nth-child(165) {
  opacity: 0.6156;
  transform: translate(69.3012vw, -10px) scale(0.888);
  animation: fall-165 25s -5s linear infinite;
}
@keyframes fall-165 {
  54.043% {
    transform: translate(65.0614vw, 54.043vh) scale(0.888);
  }
  to {
    transform: translate(67.1813vw, 100vh) scale(0.888);
  }
}
.snow:nth-child(166) {
  opacity: 0.2347;
  transform: translate(24.4403vw, -10px) scale(0.3288);
  animation: fall-166 26s -26s linear infinite;
}
@keyframes fall-166 {
  63.074% {
    transform: translate(21.9524vw, 63.074vh) scale(0.3288);
  }
  to {
    transform: translate(23.19635vw, 100vh) scale(0.3288);
  }
}
.snow:nth-child(167) {
  opacity: 0.8039;
  transform: translate(5.606vw, -10px) scale(0.8155);
  animation: fall-167 30s -15s linear infinite;
}
@keyframes fall-167 {
  43.462% {
    transform: translate(-1.5563vw, 43.462vh) scale(0.8155);
  }
  to {
    transform: translate(2.02485vw, 100vh) scale(0.8155);
  }
}
.snow:nth-child(168) {
  opacity: 0.8429;
  transform: translate(81.6777vw, -10px) scale(0.7863);
  animation: fall-168 27s -8s linear infinite;
}
@keyframes fall-168 {
  31.183% {
    transform: translate(84.8491vw, 31.183vh) scale(0.7863);
  }
  to {
    transform: translate(83.2634vw, 100vh) scale(0.7863);
  }
}
.snow:nth-child(169) {
  opacity: 0.6245;
  transform: translate(76.8176vw, -10px) scale(0.9076);
  animation: fall-169 30s -14s linear infinite;
}
@keyframes fall-169 {
  56.471% {
    transform: translate(70.1192vw, 56.471vh) scale(0.9076);
  }
  to {
    transform: translate(73.4684vw, 100vh) scale(0.9076);
  }
}
.snow:nth-child(170) {
  opacity: 0.5464;
  transform: translate(58.6427vw, -10px) scale(0.3597);
  animation: fall-170 14s -6s linear infinite;
}
@keyframes fall-170 {
  72.499% {
    transform: translate(67.34vw, 72.499vh) scale(0.3597);
  }
  to {
    transform: translate(62.99135vw, 100vh) scale(0.3597);
  }
}
.snow:nth-child(171) {
  opacity: 0.4539;
  transform: translate(89.1814vw, -10px) scale(0.4591);
  animation: fall-171 15s -11s linear infinite;
}
@keyframes fall-171 {
  55.584% {
    transform: translate(91.8149vw, 55.584vh) scale(0.4591);
  }
  to {
    transform: translate(90.49815vw, 100vh) scale(0.4591);
  }
}
.snow:nth-child(172) {
  opacity: 0.3276;
  transform: translate(14.8321vw, -10px) scale(0.9147);
  animation: fall-172 21s -11s linear infinite;
}
@keyframes fall-172 {
  44.936% {
    transform: translate(17.0705vw, 44.936vh) scale(0.9147);
  }
  to {
    transform: translate(15.9513vw, 100vh) scale(0.9147);
  }
}
.snow:nth-child(173) {
  opacity: 0.4604;
  transform: translate(91.2184vw, -10px) scale(0.3653);
  animation: fall-173 20s -28s linear infinite;
}
@keyframes fall-173 {
  42.496% {
    transform: translate(98.7143vw, 42.496vh) scale(0.3653);
  }
  to {
    transform: translate(94.96635vw, 100vh) scale(0.3653);
  }
}
.snow:nth-child(174) {
  opacity: 0.0117;
  transform: translate(29.3554vw, -10px) scale(0.9548);
  animation: fall-174 29s -12s linear infinite;
}
@keyframes fall-174 {
  66.62% {
    transform: translate(23.0299vw, 66.62vh) scale(0.9548);
  }
  to {
    transform: translate(26.19265vw, 100vh) scale(0.9548);
  }
}
.snow:nth-child(175) {
  opacity: 0.6192;
  transform: translate(7.0126vw, -10px) scale(0.2117);
  animation: fall-175 16s -22s linear infinite;
}
@keyframes fall-175 {
  40.958% {
    transform: translate(15.3898vw, 40.958vh) scale(0.2117);
  }
  to {
    transform: translate(11.2012vw, 100vh) scale(0.2117);
  }
}
.snow:nth-child(176) {
  opacity: 0.7356;
  transform: translate(89.1939vw, -10px) scale(0.0264);
  animation: fall-176 28s -24s linear infinite;
}
@keyframes fall-176 {
  58.357% {
    transform: translate(90.1665vw, 58.357vh) scale(0.0264);
  }
  to {
    transform: translate(89.6802vw, 100vh) scale(0.0264);
  }
}
.snow:nth-child(177) {
  opacity: 0.9994;
  transform: translate(29.7412vw, -10px) scale(0.8241);
  animation: fall-177 28s -21s linear infinite;
}
@keyframes fall-177 {
  71.511% {
    transform: translate(23.1114vw, 71.511vh) scale(0.8241);
  }
  to {
    transform: translate(26.4263vw, 100vh) scale(0.8241);
  }
}
.snow:nth-child(178) {
  opacity: 0.6718;
  transform: translate(16.3487vw, -10px) scale(0.3416);
  animation: fall-178 27s -18s linear infinite;
}
@keyframes fall-178 {
  68.122% {
    transform: translate(8.5vw, 68.122vh) scale(0.3416);
  }
  to {
    transform: translate(12.42435vw, 100vh) scale(0.3416);
  }
}
.snow:nth-child(179) {
  opacity: 0.0178;
  transform: translate(38.6712vw, -10px) scale(0.9841);
  animation: fall-179 12s -12s linear infinite;
}
@keyframes fall-179 {
  43.603% {
    transform: translate(45.4472vw, 43.603vh) scale(0.9841);
  }
  to {
    transform: translate(42.0592vw, 100vh) scale(0.9841);
  }
}
.snow:nth-child(180) {
  opacity: 0.1207;
  transform: translate(29.2776vw, -10px) scale(0.259);
  animation: fall-180 20s -8s linear infinite;
}
@keyframes fall-180 {
  73.235% {
    transform: translate(24.1294vw, 73.235vh) scale(0.259);
  }
  to {
    transform: translate(26.7035vw, 100vh) scale(0.259);
  }
}
.snow:nth-child(181) {
  opacity: 0.7126;
  transform: translate(45.3444vw, -10px) scale(0.3268);
  animation: fall-181 22s -16s linear infinite;
}
@keyframes fall-181 {
  30.103% {
    transform: translate(51.7277vw, 30.103vh) scale(0.3268);
  }
  to {
    transform: translate(48.53605vw, 100vh) scale(0.3268);
  }
}
.snow:nth-child(182) {
  opacity: 0.437;
  transform: translate(20.3221vw, -10px) scale(0.4408);
  animation: fall-182 27s -29s linear infinite;
}
@keyframes fall-182 {
  69.671% {
    transform: translate(17.9699vw, 69.671vh) scale(0.4408);
  }
  to {
    transform: translate(19.146vw, 100vh) scale(0.4408);
  }
}
.snow:nth-child(183) {
  opacity: 0.5483;
  transform: translate(74.902vw, -10px) scale(0.5079);
  animation: fall-183 17s -19s linear infinite;
}
@keyframes fall-183 {
  46.886% {
    transform: translate(83.9558vw, 46.886vh) scale(0.5079);
  }
  to {
    transform: translate(79.4289vw, 100vh) scale(0.5079);
  }
}
.snow:nth-child(184) {
  opacity: 0.6999;
  transform: translate(82.5628vw, -10px) scale(0.081);
  animation: fall-184 30s -24s linear infinite;
}
@keyframes fall-184 {
  49.618% {
    transform: translate(81.4612vw, 49.618vh) scale(0.081);
  }
  to {
    transform: translate(82.012vw, 100vh) scale(0.081);
  }
}
.snow:nth-child(185) {
  opacity: 0.7732;
  transform: translate(30.2134vw, -10px) scale(0.3793);
  animation: fall-185 29s -10s linear infinite;
}
@keyframes fall-185 {
  68.329% {
    transform: translate(34.7329vw, 68.329vh) scale(0.3793);
  }
  to {
    transform: translate(32.47315vw, 100vh) scale(0.3793);
  }
}
.snow:nth-child(186) {
  opacity: 0.903;
  transform: translate(83.4702vw, -10px) scale(0.5703);
  animation: fall-186 16s -13s linear infinite;
}
@keyframes fall-186 {
  65.144% {
    transform: translate(90.9491vw, 65.144vh) scale(0.5703);
  }
  to {
    transform: translate(87.20965vw, 100vh) scale(0.5703);
  }
}
.snow:nth-child(187) {
  opacity: 0.0345;
  transform: translate(66.1243vw, -10px) scale(0.7417);
  animation: fall-187 19s -11s linear infinite;
}
@keyframes fall-187 {
  50.064% {
    transform: translate(58.7192vw, 50.064vh) scale(0.7417);
  }
  to {
    transform: translate(62.42175vw, 100vh) scale(0.7417);
  }
}
.snow:nth-child(188) {
  opacity: 0.4185;
  transform: translate(81.535vw, -10px) scale(0.9451);
  animation: fall-188 20s -1s linear infinite;
}
@keyframes fall-188 {
  33.518% {
    transform: translate(90.8058vw, 33.518vh) scale(0.9451);
  }
  to {
    transform: translate(86.1704vw, 100vh) scale(0.9451);
  }
}
.snow:nth-child(189) {
  opacity: 0.0695;
  transform: translate(50.5982vw, -10px) scale(0.2251);
  animation: fall-189 27s -25s linear infinite;
}
@keyframes fall-189 {
  64.504% {
    transform: translate(41.1467vw, 64.504vh) scale(0.2251);
  }
  to {
    transform: translate(45.87245vw, 100vh) scale(0.2251);
  }
}
.snow:nth-child(190) {
  opacity: 0.0409;
  transform: translate(97.623vw, -10px) scale(0.6235);
  animation: fall-190 29s -21s linear infinite;
}
@keyframes fall-190 {
  45.485% {
    transform: translate(91.4177vw, 45.485vh) scale(0.6235);
  }
  to {
    transform: translate(94.52035vw, 100vh) scale(0.6235);
  }
}
.snow:nth-child(191) {
  opacity: 0.2599;
  transform: translate(79.0085vw, -10px) scale(0.1566);
  animation: fall-191 19s -11s linear infinite;
}
@keyframes fall-191 {
  69.609% {
    transform: translate(73.727vw, 69.609vh) scale(0.1566);
  }
  to {
    transform: translate(76.36775vw, 100vh) scale(0.1566);
  }
}
.snow:nth-child(192) {
  opacity: 0.9352;
  transform: translate(38.5846vw, -10px) scale(0.86);
  animation: fall-192 25s -5s linear infinite;
}
@keyframes fall-192 {
  35.736% {
    transform: translate(48.5811vw, 35.736vh) scale(0.86);
  }
  to {
    transform: translate(43.58285vw, 100vh) scale(0.86);
  }
}
.snow:nth-child(193) {
  opacity: 0.3523;
  transform: translate(66.9449vw, -10px) scale(0.6943);
  animation: fall-193 13s -18s linear infinite;
}
@keyframes fall-193 {
  51.733% {
    transform: translate(60.6478vw, 51.733vh) scale(0.6943);
  }
  to {
    transform: translate(63.79635vw, 100vh) scale(0.6943);
  }
}
.snow:nth-child(194) {
  opacity: 0.2391;
  transform: translate(51.7938vw, -10px) scale(0.0868);
  animation: fall-194 22s -22s linear infinite;
}
@keyframes fall-194 {
  61.809% {
    transform: translate(47.5887vw, 61.809vh) scale(0.0868);
  }
  to {
    transform: translate(49.69125vw, 100vh) scale(0.0868);
  }
}
.snow:nth-child(195) {
  opacity: 0.5674;
  transform: translate(68.0645vw, -10px) scale(0.3495);
  animation: fall-195 21s -25s linear infinite;
}
@keyframes fall-195 {
  41.762% {
    transform: translate(75.8982vw, 41.762vh) scale(0.3495);
  }
  to {
    transform: translate(71.98135vw, 100vh) scale(0.3495);
  }
}
.snow:nth-child(196) {
  opacity: 0.1717;
  transform: translate(79.0642vw, -10px) scale(0.5744);
  animation: fall-196 22s -23s linear infinite;
}
@keyframes fall-196 {
  43.164% {
    transform: translate(74.1828vw, 43.164vh) scale(0.5744);
  }
  to {
    transform: translate(76.6235vw, 100vh) scale(0.5744);
  }
}
.snow:nth-child(197) {
  opacity: 0.8135;
  transform: translate(61.9166vw, -10px) scale(0.866);
  animation: fall-197 11s -2s linear infinite;
}
@keyframes fall-197 {
  73.584% {
    transform: translate(70.753vw, 73.584vh) scale(0.866);
  }
  to {
    transform: translate(66.3348vw, 100vh) scale(0.866);
  }
}
.snow:nth-child(198) {
  opacity: 0.3634;
  transform: translate(48.8145vw, -10px) scale(0.187);
  animation: fall-198 21s -5s linear infinite;
}
@keyframes fall-198 {
  61.538% {
    transform: translate(39.4586vw, 61.538vh) scale(0.187);
  }
  to {
    transform: translate(44.13655vw, 100vh) scale(0.187);
  }
}
.snow:nth-child(199) {
  opacity: 0.9846;
  transform: translate(25.6688vw, -10px) scale(0.5966);
  animation: fall-199 19s -23s linear infinite;
}
@keyframes fall-199 {
  63.033% {
    transform: translate(32.5232vw, 63.033vh) scale(0.5966);
  }
  to {
    transform: translate(29.096vw, 100vh) scale(0.5966);
  }
}
.snow:nth-child(200) {
  opacity: 0.6776;
  transform: translate(94.9549vw, -10px) scale(0.2577);
  animation: fall-200 26s -9s linear infinite;
}
@keyframes fall-200 {
  60.96% {
    transform: translate(98.4359vw, 60.96vh) scale(0.2577);
  }
  to {
    transform: translate(96.6954vw, 100vh) scale(0.2577);
  }
}

.tree{
  position:relative;
  background-color: black;
  text-align:left;
  width:auto; 
  display:inline-block  !important; display:inline; 
  color: rgb(38, 0, 255);
}
</style>
