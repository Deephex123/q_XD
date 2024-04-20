var width = 0;
var height = 0;
function findDimensions()
{
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;
    }
    return 
    {
    'width': height,
    'height': width 
    };
}
