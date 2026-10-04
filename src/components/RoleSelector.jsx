import { CreditCard, ShieldCheck, Stethoscope, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/RoleSelector.css";

const roles = [
  {
    id: "patient",
    label: "Patient",
    description: "Access your health records",
    icon: UserRound,
  },
  {
    id: "doctor",
    label: "Doctor",
    description: "Manage your patients",
    icon: Stethoscope,
  },
  {
    id: "admin",
    label: "Admin",
    description: "Manage hospital operations",
    icon: ShieldCheck,
  },
  {
    id: "billing",
    label: "Billing",
    description: "Manage billing services",
    icon: CreditCard,
  },
];

function RoleSelector({ activeRole }) {
  const navigate = useNavigate();

  return (
    <div className="role-selector">
      <p className="role-selector-label">Sign in as</p>

      <div className="role-grid">
        {roles.map((role) => {
          const Icon = role.icon;

          return (
            <button
              key={role.id}
              type="button"
              className={`role-card ${
                activeRole === role.id ? "active" : ""
              }`}
              onClick={() => navigate(`/login/${role.id}`)}
            >
              <div className="role-icon">
                <Icon size={21} />
              </div>

              <div className="role-info">
                <span className="role-name">{role.label}</span>
                <span className="role-description">
                  {role.description}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RoleSelector;