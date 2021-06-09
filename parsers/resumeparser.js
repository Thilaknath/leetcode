/** Load a Resume to filter out based on tehnology we use or reject it */

const fs = require('fs')
const wc = require('count-words')
let parsed;

// Convert to array
function readResume1 (filepath) {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
  
    let usedTech = ["Helm", "Kube", "Kubernetes", "Docker", "Git", "Ansible", "Java", "Prometheus", "Grafana", "Jaeger", "Jenkins"].map(function (v) {
      return v.toLowerCase();
    })
  
    let resumeTech = wc(data)
    let resumeObjAsArray = Object.entries(resumeTech)
  
  
    parsed = resumeObjAsArray.filter(([key, value]) => {
      if (usedTech.includes(key.toLowerCase())) {
        return true
      }
    });
    
    console.log(parsed) 
  })
}

// Without converting to array
function readResume2 (filepath) {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }
  
    let usedTech = ["Helm", "Kube", "Kubernetes", "Docker", "Git", "Ansible", "Java", "Prometheus", "Grafana", "Jaeger", "Jenkins"].map(function (v) {
      return v.toLowerCase();
    })
  
    let resumeTech = wc(data.toLowerCase())

    let knownSkills = Object.keys(resumeTech)
    .filter(key => usedTech.includes(key))
    .reduce((obj, key) => {
      obj[key] = resumeTech[key];
      return obj;
    }, {})
       
    console.log(knownSkills) 
  })
}

readResume1('./resume.txt')
readResume2('./podLogs.txt')