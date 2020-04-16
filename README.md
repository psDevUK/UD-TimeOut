# UD-TimeOut
UniversalDashboard component based upon https://github.com/supremetechnopriest/react-idle-timer

## What does it do?
 This component tracks all user interactivity with the web-page. If you press F12 and look and the console tab, then start interacting
 with the webpage you will see all user activity is recorded.  If you have the react component plug-in installed you will see there
 are a few attributes for this component the timeout period which has been defined, and if the page has timed out or not, this is a
 dynamic attribute that will change from false to true when the page becomes idle

## Reason for building this component
 Numerous people seem to have idle issues with end-users in UD...and my name was called upon in a forum thread https://forums.universaldashboard.io/t/reload-page-on-tab-change/2546
 so I thought I would put my thinking cap on and try to come up with a half decent solution.  So as a user of UD very lucky to have
 such a dedicated developer of the product aka Adam Driscoll...so he had come up with a solution...but this was still bugging me, so
 I came across https://www.npmjs.com/package/react-idle-timer and after asking Adam on twitter I took it upon myself to implement
 this into UD. So armed with this information https://twitter.com/adamdriscoll/status/1250524712725147651 I now had a very simple
 component I should be able to monitor user activity with
 
## This was done as my solution...
 So I know there is an official fix coming out for UD for this issue of the page becoming unresponsive as some components may stop
 working or become unresponsive once the page is idle. So sadly I couldn't automatically make this component do all the fancy work
 and will take you, yes you the end user to implement your own solution on how you want to handle the situation when the page
 has become idle

## Parameter
 There is only one additional parameter included with this module other than the default ```-Id``` parameter this is
 
 * Minutes this is an integer parameter and is defaulted to 24 so you do not actually need to use this unless you want to specify 
 your own timeout period.
 
  As the default is 25 minutes figured a default setting of 24 minutes should be good. Again if you wish to change the default of 24 minutes
  till timeout then use this parameter and specify the amount of minutes with a number.
  
## Example
In this example I am setting the timeout to be one minute for demo purposes. If no page activity is detected within one minute this
will the set the state attribute of this component isTimedOut to True, all the time the page is active, as in a user is responding
with the page 

```
Import-Module -Name UniversalDashboard
Import-Module -Name UniversalDashboard.UDTimeOut
Get-UDDashboard | Stop-UDDashboard
$init = New-UDEndpointInitialization -Module @('UniversalDashboard.UDTimeOut')
Start-UDDashboard -Port 10005 -Dashboard (
    New-UDDashboard -Title "Powershell UniversalDashboard" -EndpointInitialization $init -Content {
        New-UDRow -Columns {
            New-UDColumn -Size 12 -Endpoint {
                New-UDTimeOut -Id "TIMEOUT" -Minutes 1

                New-UDButton -Text "TEST" -OnClick {

                 Show-UDToast -Message "Thank you" -Position topLeft -Duration 4000

                }

            }

        }
        New-UDRow -Columns {
            New-UDColumn -Id "Checker" -Size 12 -Endpoint {
                $Timeout2 = (Get-UDElement -Id 'TIMEOUT').Attributes.isTimedOut
                if ($Timeout2 -eq "True") {
                    Show-UDModal -Content { New-UDHeading -Size 5 -Text "Game Over" }
                }
            } -AutoRefresh -RefreshInterval 5
        }
    }
)

```

  Hopefully this is enough information to help you use this module
  
  
