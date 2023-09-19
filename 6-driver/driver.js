const hasLicence = false;
const age = prompt ();
const isDrunk = true;
if (age >= 18 && !hasLicence || !isDrunk)
{
    console.log("Может");
}
else {
    console.log("Не может")
}