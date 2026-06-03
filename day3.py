print ("=== Day3:3june2026-DevOps Logic===")
server_status=input(" server status (up/down:")
if server_status == "up":
    print("Server is running smoothly .All good .Continue Monitoring.")
elif server_status == "down":
    print("Server is down! Initiating troubleshooting steps.")
else:  
     print("Invalid input. Please enter 'up' or 'down'.")
print("\nif else is used regulary in DevOps to monitor server status and automate responses based on conditions.")
print ("Status: Day3 complete")