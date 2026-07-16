import { useState } from "react";

export default function Settings() {
  const [settings, setSettings] = useState({
    restaurantName: "My Restaurant",
    email: "restaurant@mail.com",
    phone: "01012345678",
    notifications: true,
    darkMode: false,
  });
  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const toggleSetting = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const saveSettings = () => {
    alert("Settings saved successfully ✅");
  };
  return (
  <div className="p-6 bg-gray-100 min-h-screen">

    {/* HEADER */}
    <h1 className="text-2xl font-bold mb-6">Settings</h1>

    {/* FORM */}
    <div className="bg-white p-6 rounded-xl shadow space-y-4">

      {/* Restaurant Name */}
      <div>
        <label className="text-sm text-gray-600">Restaurant Name</label>
        <input
          name="restaurantName"
          value={settings.restaurantName}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm text-gray-600">Email</label>
        <input
          name="email"
          value={settings.email}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-sm text-gray-600">Phone</label>
        <input
          name="phone"
          value={settings.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded mt-1"
        />
      </div>
      {/* Notifications */}
      <div className="flex items-center justify-between">
        <span>Notifications</span>
        <button
          onClick={() => toggleSetting("notifications")}
          className={`px-4 py-1 rounded ${
            settings.notifications ? "bg-green-500" : "bg-gray-400"
          } text-white`}
        >
          {settings.notifications ? "ON" : "OFF"}
        </button>
      </div>

      {/* Dark Mode */}
      <div className="flex items-center justify-between">
        <span>Dark Mode</span>
        <button
          onClick={() => toggleSetting("darkMode")}
          className={`px-4 py-1 rounded ${
            settings.darkMode ? "bg-green-500" : "bg-gray-400"
          } text-white`}
        >
          {settings.darkMode ? "ON" : "OFF"}
        </button>
      </div>

      {/* SAVE BUTTON */}
      <button
        onClick={saveSettings}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Save Settings
      </button>

    </div>
  </div>
);
}